import {
		DataConfiguration,
		DataItemConfig,
		GenerateProps,
		GenerateWithPaginationProps,
		SupportedParam,
		TimeBoundary
} from "../interfaces";
import {
		DataElement,
		Enrollment,
		Event,
		Program,
		TrackedEntityAttribute,
		TrackedEntityInstance,
		uid
} from "@hisptz/dhis2-utils";
import {faker} from "@faker-js/faker";
import {compact, find, flatten, flattenDeep, fromPairs, get, head, isEmpty, mapValues, times} from "lodash";
import {SupportedDataTypeNames, supportedDataTypes} from "../constants/dataTypes";
import {DataEngine} from "../../shared/state/engine";


function generateAutogeneratedValuesQuery(values: DataItemConfig[], count: number, orgUnitCode: string) {
		return fromPairs(values.map(({dataItemId, options}) => ([dataItemId, {
				resource: 'trackedEntityAttributes',
				id: `${dataItemId}/generateAndReserve`,
				params: {
						numberToReserve: count,
						ORG_UNIT_CODE: orgUnitCode
				}
		}])))
}

function sanitizeParam(param: any, config?: SupportedParam) {
		if (!config) {
				return param;
		}
		switch (config.type) {
				case "number":
						return Number(param);
				default:
						return param;
		}
}


export class TrackerRandomDataEngine {
		config: DataConfiguration;
		program: Program;
		attributes: TrackedEntityAttribute[];
		dataElements: DataElement[];
		engine: DataEngine;
		autogenerated?: {
				[key: string]: string[]
		}

		constructor({config, program, engine}: { config: DataConfiguration, program: Program, engine: DataEngine }) {
				this.config = config;
				this.engine = engine
				this.program = program;
				this.attributes = this.program.programTrackedEntityAttributes?.map(({trackedEntityAttribute}) => trackedEntityAttribute) ?? [];
				this.dataElements = compact(flatten(this.program.programStages?.map(({programStageDataElements}) => programStageDataElements?.map(({dataElement}) => dataElement)))) ?? [];

				if (this.config.meta.locale) {
						faker.setLocale(this.config.meta.locale)
				}
		}

		async generateWithPagination({pages, pageSize}: GenerateWithPaginationProps): Promise<TrackedEntityInstance[][]> {
				const teiPages: TrackedEntityInstance[][] = []
				times(pages, async () => teiPages.push(await this.generate({count: pageSize ?? 50})))
				return teiPages;
		}


		async getAutogeneratedValues(count: number) {
				const autogeneratedAttributes = this.config.attributes?.filter(({dataTypeName}) => {
						return dataTypeName === SupportedDataTypeNames.AUTOGENERATED;
				});
				if (!autogeneratedAttributes || isEmpty(autogeneratedAttributes)) {
						return;
				}


				const orgUnit = head(this.config.meta.orgUnits) as any;

				const query = generateAutogeneratedValuesQuery(autogeneratedAttributes, count, orgUnit?.code);
				const values = await this.engine.query(query);

				this.autogenerated = mapValues(values, (value: Record<string, string>[], key) => {
						return value.map(({value}) => value)
				}) as unknown as { [key: string]: string[] }
		}

		async generate({count}: GenerateProps): Promise<TrackedEntityInstance[]> {
				const teis: TrackedEntityInstance[] = [];
				await this.getAutogeneratedValues(count);
				await new Promise((resolve, reject) => {
						try {
								times(count, (index) => teis.push(this.generateTei(index)));
								resolve(null)
						} catch (e) {
								reject(e)
						}
				})
				return teis;
		}


		generateDataItem<T>(config: DataItemConfig, type: 'attribute' | 'dataElement', {teiIndex}: {
				teiIndex: number
		}): T {
				const {dataItemId, dataTypeName, options} = config ?? {}
				const dataGenerationConfig = find(supportedDataTypes, ['name', dataTypeName]);


				if (dataGenerationConfig?.name === SupportedDataTypeNames.AUTOGENERATED) {
						const value = get(this.autogenerated, [dataItemId, teiIndex]);

						return {
								[type]: dataItemId,
								value
						} as T
				}


				const params = compact(options?.params?.map((param, index) => {
						if (!isEmpty(param)) {
								const paramType = dataGenerationConfig?.supportedParams?.[index];
								return sanitizeParam(param, paramType);
						} else {
								return dataGenerationConfig?.defaultParams?.[index];
						}
				}) ?? dataGenerationConfig?.defaultParams ?? []);

				if (dataGenerationConfig?.name === SupportedDataTypeNames.TRUE_ONLY) {
						params.unshift(head(dataGenerationConfig.defaultParams))
				}

				let value;

				if (dataGenerationConfig?.name === SupportedDataTypeNames.OPTIONS) {
						if (!isEmpty(head(params))) {
								value = dataGenerationConfig?.fn(head(params))
						}
				} else {
						value = dataGenerationConfig?.fn(...(params));
				}

				return {
						[type]: dataItemId,
						value
				} as T
		}

		generateEvent({dataElementsConfig, eventTimeBoundary, teiIndex, enrollmentDate, ...props}: {
				programStage: string;
				enrollment: string;
				orgUnit: string;
				trackedEntityInstance: string;
				dataElementsConfig: DataItemConfig[];
				eventTimeBoundary: TimeBoundary,
				enrollmentDate: string;
				teiIndex: number
		}): Event {
				const minDate = new Date(eventTimeBoundary.min ?? '') < new Date(enrollmentDate ?? '') ? new Date(enrollmentDate ?? '') : new Date(eventTimeBoundary.min ?? '');
				const maxDate = new Date(eventTimeBoundary.max ?? '') > new Date(enrollmentDate ?? '') ? new Date(eventTimeBoundary.max ?? '') : new Date(enrollmentDate ?? '');
				const eventDate = faker.date.between(minDate ?? new Date(), maxDate ?? new Date()).toISOString();
				const status = 'COMPLETED';

				const dataValues = dataElementsConfig?.map((config) => this.generateDataItem<{
						dataElement: string;
						value: any
				}>(config, 'dataElement', {teiIndex}))

				return {
						...props,
						eventDate,
						event: uid(),
						dataValues,
						status,
						program: this.program.id,
				} as any as Event
		}

		generateTei(teiIndex: number): TrackedEntityInstance {
				const trackedEntityType = this.config.meta.trackedEntityType;
				const enrollmentDate = faker.date.between(new Date(this.config.meta.enrollmentTimeBoundary?.min ?? '') ?? new Date(), new Date(this.config.meta.enrollmentTimeBoundary?.max ?? '') ?? new Date()).toISOString();
				const orgUnit = faker.helpers.arrayElement(this.config.meta.orgUnits?.map(({id}) => id) as string[]);
				const trackedEntityInstance = uid();
				const enrollment = uid();


				const trackedEntityAttributes = this.config.attributes?.map((attributeConfig) => this.generateDataItem<{
						attribute: string;
						value: any
				}>(attributeConfig, 'attribute', {teiIndex}));

				const events = flattenDeep(this.config.programStages?.map(({id, eventTimeBoundary, dataElements, count,}) => {
						const programStage = find(this.program.programStages, ['id', id]);

						if (programStage?.repeatable) {
								return Array.from(Array(count).keys()).map(() => this.generateEvent({
										enrollmentDate,
										orgUnit,
										programStage: id,
										enrollment,
										trackedEntityInstance,
										eventTimeBoundary,
										dataElementsConfig: dataElements,
										teiIndex
								}))
						}

						return this.generateEvent({
								enrollmentDate,
								orgUnit,
								programStage: id,
								enrollment,
								trackedEntityInstance,
								eventTimeBoundary,
								dataElementsConfig: dataElements,
								teiIndex
						})
				}));

				const enrollmentObject: Enrollment = {
						enrollmentDate,
						trackedEntityInstance,
						enrollment,
						events,
						program: this.program.id,
						orgUnit
				} as any as Enrollment

				return {
						trackedEntityInstance,
						attributes: trackedEntityAttributes,
						enrollments: [
								enrollmentObject
						],
						orgUnit,
						trackedEntityType,
				} as any as TrackedEntityInstance
		}
}


export class TrackerDataExport {
		export(data: TrackedEntityInstance[], {}: { type: "json" }) {

		}
}


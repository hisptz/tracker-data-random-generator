import {
    DataConfiguration,
    DataItemConfig,
    GenerateProps,
    GenerateWithPaginationProps,
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
import {compact, find, flatten, flattenDeep, times} from "lodash";
import {supportedDataTypes} from "../constants/dataTypes";


export class TrackerRandomDataEngine {
    config: DataConfiguration;
    program: Program;
    attributes: TrackedEntityAttribute[];
    dataElements: DataElement[]

    constructor({config, program}: { config: DataConfiguration, program: Program }) {
        this.config = config;
        this.program = program;
        this.attributes = this.program.programTrackedEntityAttributes?.map(({trackedEntityAttribute}) => trackedEntityAttribute) ?? [];
        this.dataElements = compact(flatten(this.program.programStages?.map(({programStageDataElements}) => programStageDataElements?.map(({dataElement}) => dataElement)))) ?? [];

        if (this.config.meta.locale) {
            faker.setLocale(this.config.meta.locale)
        }
    }

    generateWithPagination({pages, pageSize}: GenerateWithPaginationProps): TrackedEntityInstance[][] {
        const teiPages: TrackedEntityInstance[][] = []
        times(pages, () => teiPages.push(this.generate({count: pageSize ?? 50})))
        return teiPages;
    }

    generate({count}: GenerateProps): TrackedEntityInstance[] {
        const teis: TrackedEntityInstance[] = [];
        times(count, () => teis.push(this.generateTei()))
        return teis;
    }


    generateDataItem<T>(config: DataItemConfig, type: 'attribute' | 'dataElement'): T {
        const {dataItemId, dataTypeName, options} = config ?? {}
        const dataItem = type === "attribute" ? find(this.attributes, ['id', dataItemId]) : find(this.dataElements, ['id', dataItemId]);
        const dataGenerationConfig = find(supportedDataTypes, ['name', dataTypeName]);
        const value = dataGenerationConfig?.fn(...(options?.params ?? dataGenerationConfig?.defaultParams ?? []));

        return {
            [type]: dataItemId,
            value
        } as T
    }

    generateEvent({dataElementsConfig, eventTimeBoundary, ...props}: {
        programStage: string;
        enrollment: string;
        orgUnit: string;
        trackedEntityInstance: string;
        dataElementsConfig: DataItemConfig[];
        eventTimeBoundary: TimeBoundary
    }): Event {
        const eventDate = faker.date.between(new Date(eventTimeBoundary.min ?? '') ?? new Date(), new Date(eventTimeBoundary.max ?? '') ?? new Date()).toISOString();
        const status = 'COMPLETED';

        const dataValues = dataElementsConfig.map((config) => this.generateDataItem<{
            dataElement: string;
            value: any
        }>(config, 'dataElement'))

        console.log(props)

        return {
            ...props,
            eventDate,
            event: uid(),
            dataValues,
            status,
            program: this.program.id,
        } as any as Event
    }

    generateTei(): TrackedEntityInstance {
        const trackedEntityType = this.config.meta.trackedEntityType;
        const enrollmentDate = faker.date.between(new Date(this.config.meta.enrollmentTimeBoundary?.min ?? '') ?? new Date(), new Date(this.config.meta.enrollmentTimeBoundary?.max ?? '') ?? new Date()).toISOString();
        const orgUnit = faker.helpers.arrayElement(this.config.meta.orgUnits);
        const trackedEntityInstance = uid();
        const enrollment = uid();

        const trackedEntityAttributes = this.config.attributes?.map((attributeConfig) => this.generateDataItem<{
            attribute: string;
            value: any
        }>(attributeConfig, 'attribute'));

        const events = flattenDeep(this.config.programStages?.map(({id, eventTimeBoundary, dataElements, count,}) => {
            const programStage = find(this.program.programStages, ['id', id]);

            if (programStage?.repeatable) {
                return Array.from(Array(count).keys()).map(() => this.generateEvent({
                    orgUnit,
                    programStage: id,
                    enrollment,
                    trackedEntityInstance,
                    eventTimeBoundary,
                    dataElementsConfig: dataElements
                }))
            }

            return this.generateEvent({
                orgUnit,
                programStage: id,
                enrollment,
                trackedEntityInstance,
                eventTimeBoundary,
                dataElementsConfig: dataElements
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


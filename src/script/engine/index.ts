import {DataConfiguration, DataItemConfig, GenerateProps, TimeBoundary} from "../interfaces";
import {
    Program,
    Event,
    TrackedEntityInstance,
    uid,
    Enrollment,
    TrackedEntityAttribute,
    DataElement
} from "@hisptz/dhis2-utils";
import {faker} from "@faker-js/faker";
import {compact, find, flatten, times} from "lodash";
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

    generate({noOfRecords}: GenerateProps): TrackedEntityInstance[] {
        const teis: TrackedEntityInstance[] = [];
        times(noOfRecords, () => teis.push(this.generateTei()))
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
        const eventDate = faker.date.between(eventTimeBoundary.min?.toJSDate() ?? new Date(), eventTimeBoundary.max?.toJSDate() ?? new Date()).toISOString();
        const status = 'COMPLETED';

        const dataValues = dataElementsConfig.map((config) => this.generateDataItem<{
            dataElement: string;
            value: any
        }>(config, 'dataElement'))

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
        const enrollmentDate = faker.date.between(this.config.meta.enrollmentTimeBoundary?.min?.toJSDate() ?? new Date(), this.config.meta.enrollmentTimeBoundary?.max?.toJSDate() ?? new Date()).toISOString();
        const orgUnit = faker.helpers.arrayElement(this.config.meta.orgUnits);
        const trackedEntityInstance = uid();
        const enrollment = uid();

        const trackedEntityAttributes = this.config.attributes?.map((attributeConfig) => this.generateDataItem<{
            attribute: string;
            value: any
        }>(attributeConfig, 'attribute'));

        const events = flatten(this.config.programStages?.map(({id, eventTimeBoundary, dataElements,}) => {
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
            enrollment,
            events,
            program: this.program.id,
        } as any as Enrollment

        return {
            trackedEntityInstance: uid(),
            attributes: trackedEntityAttributes,
            enrollments: [
                enrollmentObject
            ],
            orgUnit,
            trackedEntityType,
        } as any as TrackedEntityInstance
    }
}


import {DateTimeConfiguration, DHIS2ValueType, OptionSet} from "@hisptz/dhis2-utils";
import {DateTime} from "luxon";

export interface DataType {
    name: string;
    fn: any;
    dhis2Fields: DHIS2ValueType[],
    defaultParams?: any;
}

export interface DataItemConfig {
    dataItemId: string,
    dataTypeName: string,
    options?: {
        deps?: Record<string, any>,
        probability?: number,
        params?: any[];
    }
}

export interface TimeBoundary {
    min?: DateTime,
    max?: DateTime,
    exact?: DateTime
}


export interface GenerateProps {
    noOfRecords: number
}

export interface DataConfiguration {
    meta: {
        orgUnits?: string[]
        trackedEntityType?: string;
        enrollmentTimeBoundary?: TimeBoundary
    }
    attributes?: DataItemConfig[],
    programStages?: {
        eventTimeBoundary: TimeBoundary
        id: string;
        dataElements: DataItemConfig[]
    }[]
}

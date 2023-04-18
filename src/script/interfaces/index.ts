import {DHIS2ValueType} from "@hisptz/dhis2-utils";


export interface SupportedParam {
    type: 'number' | 'text' | 'options',
    options?: { name: string; value: any }[]
}

export interface DataType {
    name: string;
    fn: any;
    dhis2Fields: DHIS2ValueType[],
    defaultParams?: any[];
    supportedParams?: SupportedParam[]
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
    min?: string,
    max?: string,
}


export interface GenerateProps {
    count: number;
}

export interface GenerateWithPaginationProps {
    pages: number;
    pageSize?: number
}


export interface DataConfigurationForm {
    name: string;
    id: string;
    attributes?: DataItemConfig[],
    programStages?: {
        eventTimeBoundary: TimeBoundary;
        id: string;
        count?: number;
        dataElements: DataItemConfig[]
    }[]
}

export interface DataConfiguration {
    name: string;
    id: string;
    meta: {
        orgUnits?: string[]
        trackedEntityType?: string;
        enrollmentTimeBoundary?: TimeBoundary;
        locale?: string;
    }
    attributes?: DataItemConfig[],
    programStages?: {
        eventTimeBoundary: TimeBoundary;
        id: string;
        count?: number;
        dataElements: DataItemConfig[]
    }[]
}

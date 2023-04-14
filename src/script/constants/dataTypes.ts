import {faker} from "@faker-js/faker";
import {DHIS2ValueType} from "@hisptz/dhis2-utils";

export enum SupportedDataTypeNames {
    FULL_NAME = 'Full Name',
    FIRST_NAME = 'First Name',
    LAST_NAME = 'Last Name',
    SEX = "Sex",
    EMAIL = "Email",
    NUMBER = "Number",
    BOOLEAN = "True or False (Yes or No)",
    TRUE_ONLY = "True only"
}

export interface DataType {
    name: string;
    fn: () => any;
    dhis2Fields: DHIS2ValueType[]
}

export const supportedDataTypes: DataType[] = [
    {
        name: SupportedDataTypeNames.FIRST_NAME,
        fn: faker.name.firstName,
        dhis2Fields: [
            "TEXT",
            "LONG_TEXT"
        ]
    },
    {
        name: SupportedDataTypeNames.LAST_NAME,
        fn: faker.name.lastName,
        dhis2Fields: [
            "TEXT",
            "LONG_TEXT"
        ]
    },
    {
        name: SupportedDataTypeNames.FULL_NAME,
        fn: faker.name.fullName,
        dhis2Fields: [
            "TEXT",
            "LONG_TEXT"
        ]
    },
    {
        name: SupportedDataTypeNames.SEX,
        fn: faker.name.sex,
        dhis2Fields: [
            "TEXT",
            "LONG_TEXT"
        ]
    },
    {
        name: SupportedDataTypeNames.EMAIL,
        fn: faker.internet.email,
        dhis2Fields: [
            "TEXT"
        ]
    },
    {
        name: SupportedDataTypeNames.NUMBER,
        fn: faker.random.numeric,
        dhis2Fields: [
            "NUMBER"
        ]
    },
    {
        name: SupportedDataTypeNames.BOOLEAN,
        fn: faker.datatype.boolean,
        dhis2Fields: [
            "NUMBER"
        ]
    },
    {
        name: SupportedDataTypeNames.TRUE_ONLY,
        fn: faker.helpers.maybe,
        dhis2Fields: [
            "NUMBER"
        ]
    },
]

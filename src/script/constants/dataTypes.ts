import {faker} from "@faker-js/faker";
import {DataType} from "../interfaces";

export enum SupportedDataTypeNames {
    FULL_NAME = 'Full Name',
    FIRST_NAME = 'First Name',
    LAST_NAME = 'Last Name',
    SEX = "Sex",
    EMAIL = "Email",
    NUMBER = "Number",
    BOOLEAN = "True or False (Yes or No)",
    TRUE_ONLY = "True only",
    DATE_OF_BIRTH = "Date of Birth",
    DATE = "Date",
    OPTIONS = "Options",
    PHYSICAL_ADDRESS = "Physical Address",
    PHONE_NUMBER = "Phone Number",
    ID = "ID",
    LONG_TEXT = "Long text"
}


export const supportedDataTypes: DataType[] = [
    {
        name: SupportedDataTypeNames.FIRST_NAME,
        fn: faker.name.firstName,
        dhis2Fields: [
            "TEXT",
            "LONG_TEXT"
        ],
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
        name: SupportedDataTypeNames.LONG_TEXT,
        fn: faker.lorem.paragraph,
        dhis2Fields: [
            "LONG_TEXT"
        ]
    },
    {
        name: SupportedDataTypeNames.ID,
        fn: faker.datatype.uuid,
        dhis2Fields: [
            "TEXT"
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
            "BOOLEAN"
        ]
    },
    {
        name: SupportedDataTypeNames.TRUE_ONLY,
        fn: faker.helpers.maybe,
        dhis2Fields: [
            "TRUE_ONLY"
        ] as any,
        defaultParams: [
            () => true,
            {
                probability: 0.5
            }
        ]
    },
    {
        name: SupportedDataTypeNames.DATE_OF_BIRTH,
        fn: faker.date.past,
        dhis2Fields: [
            "DATE"
        ]
    },
    {
        name: SupportedDataTypeNames.DATE,
        fn: faker.date.past,
        dhis2Fields: [
            "DATE"
        ]
    },
    {
        name: SupportedDataTypeNames.OPTIONS,
        fn: faker.helpers.arrayElement,
        dhis2Fields: []
    },
    {
        name: SupportedDataTypeNames.PHYSICAL_ADDRESS,
        fn: faker.address.street,
        dhis2Fields: [
            'TEXT',
            'LONG_TEXT',
        ]
    },
    {
        name: SupportedDataTypeNames.PHONE_NUMBER,
        fn: faker.phone.number,
        dhis2Fields: [
            'PHONE_NUMBER',
            'TEXT'
        ] as any
    },
]

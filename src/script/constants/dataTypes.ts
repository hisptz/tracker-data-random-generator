import {faker} from "@faker-js/faker";
import {DataType} from "../interfaces";

export enum SupportedDataTypeNames {
    FULL_NAME = 'Full Name',
    FIRST_NAME = 'First Name',
    MIDDLE_NAME = 'Middle Name',
    LAST_NAME = 'Last Name',
    SEX = "Sex",
    EMAIL = "Email",
    NUMBER = "Number",
    BOOLEAN = "True or False (Yes or No)",
    TRUE_ONLY = "True only",
    //dates
    DATE_OF_BIRTH = "Date of Birth",
    PAST_DATE = "Past date",
    FUTURE_DATE = "Future date",
    SOON = "Soon date",
    RECENT = "Recent date",
    WEEKDAY = "Weekday",
    //Option set
    OPTIONS = "Options",
    //Address
    PHYSICAL_ADDRESS = "Physical Address",
    CITY = "City",
    COUNTRY = "Country",
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
        supportedParams: [
            {
                type: "options",
                options: [
                    {
                        name: 'Female',
                        value: "female"
                    },
                    {
                        name: 'Male',
                        value: "male"
                    },
                ]
            }
        ]
    },
    {
        name: SupportedDataTypeNames.LAST_NAME,
        fn: faker.name.lastName,
        dhis2Fields: [
            "TEXT",
            "LONG_TEXT"
        ],
        supportedParams: [
            {
                type: "options",
                options: [
                    {
                        name: 'Female',
                        value: "female"
                    },
                    {
                        name: 'Male',
                        value: "male"
                    },
                ]
            }
        ]

    },
    {
        name: SupportedDataTypeNames.FULL_NAME,
        fn: faker.name.fullName,
        dhis2Fields: [
            "TEXT",
            "LONG_TEXT"
        ],
        supportedParams: [
            {
                type: "options",
                options: [
                    {
                        name: 'Female',
                        value: "female"
                    },
                    {
                        name: 'Male',
                        value: "male"
                    },
                ]
            }
        ]

    },
    {
        name: SupportedDataTypeNames.MIDDLE_NAME,
        fn: faker.name.middleName,
        dhis2Fields: [
            "TEXT",
            "LONG_TEXT"
        ],
        supportedParams: [
            {
                type: "options",
                options: [
                    {
                        name: 'Female',
                        value: "female"
                    },
                    {
                        name: 'Male',
                        value: "male"
                    },
                ]
            }
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
    //Dates
    {
        name: SupportedDataTypeNames.DATE_OF_BIRTH,
        fn: faker.date.birthdate,
        dhis2Fields: [
            "DATE"
        ]
    },
    {
        name: SupportedDataTypeNames.FUTURE_DATE,
        fn: faker.date.future,
        dhis2Fields: [
            "DATE"
        ]
    },
    {
        name: SupportedDataTypeNames.PAST_DATE,
        fn: faker.date.past,
        dhis2Fields: [
            "DATE"
        ]
    },
    {
        name: SupportedDataTypeNames.SOON,
        fn: faker.date.soon,
        dhis2Fields: [
            "DATE"
        ]
    },
    {
        name: SupportedDataTypeNames.RECENT,
        fn: faker.date.recent,
        dhis2Fields: [
            "DATE"
        ]
    },
    {
        name: SupportedDataTypeNames.WEEKDAY,
        fn: faker.date.weekday,
        dhis2Fields: [
            "DATE"
        ]
    },
    {
        name: SupportedDataTypeNames.OPTIONS,
        fn: faker.helpers.arrayElement,
        dhis2Fields: []
    },
    //Address
    {
        name: SupportedDataTypeNames.PHYSICAL_ADDRESS,
        fn: faker.address.street,
        dhis2Fields: [
            'TEXT',
            'LONG_TEXT',
        ]
    },
    {
        name: SupportedDataTypeNames.CITY,
        fn: faker.address.city,
        dhis2Fields: [
            'TEXT',
            'LONG_TEXT',
        ]
    },
    {
        name: SupportedDataTypeNames.COUNTRY,
        fn: faker.address.county,
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

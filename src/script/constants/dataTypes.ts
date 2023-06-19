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
    BETWEEN = "Dates between",
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
        fn: faker.person.firstName,
        dhis2Fields: [
            "TEXT",
            "LONG_TEXT"
        ],
        supportedParams: [
            {
                type: "options",
                label: "Sex",
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
        fn: faker.person.lastName,
        dhis2Fields: [
            "TEXT",
            "LONG_TEXT"
        ],
        supportedParams: [
            {
                type: "options",
                label: "Sex",
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
        fn: faker.person.fullName,
        dhis2Fields: [
            "TEXT",
            "LONG_TEXT"
        ],
    },
    {
        name: SupportedDataTypeNames.MIDDLE_NAME,
        fn: faker.person.middleName,
        dhis2Fields: [
            "TEXT",
            "LONG_TEXT"
        ],
        supportedParams: [
            {
                type: "options",
                label: "Sex",
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
        fn: faker.string.alphanumeric,
        dhis2Fields: [
            "TEXT"
        ],
        supportedParams: [
            {
                type: "number",
                label: "Length"
            }
        ]
    },
    {
        name: SupportedDataTypeNames.SEX,
        fn: faker.person.sex,
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
        fn: faker.number.int,
        dhis2Fields: [
            "NUMBER"
        ],
        supportedParams: [
            {
                type: "object",
                label: "",
                keys: [
                    {type: "number", label: "Min", key: 'min'},
                    {type: "number", label: "Max", key: "max"}
                ]
            }
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
        supportedParams: [
            {
                type: "default",
                label: "Function"
            },
            {
                type: "object",
                label: "Probability",
                keys: [
                    {
                        key: "probability",
                        type: "number",
                        label: "Probability",
                        fieldProps: {
                            helpText: "A value between 0 and 1"
                        }
                    }
                ]
            }
        ],
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
        name: SupportedDataTypeNames.BETWEEN,
        fn: faker.date.between,
        dhis2Fields: [
            "DATE"
        ],
        supportedParams: [
            {
                label: "From",
                type: "date"
            },
            {
                label: "To",
                type: "date"
            }
        ]
    },
    {
        name: SupportedDataTypeNames.OPTIONS,
        fn: faker.helpers.arrayElement,
        defaultParams: [
            []
        ],
        dhis2Fields: []
    },
    //Address
    {
        name: SupportedDataTypeNames.PHYSICAL_ADDRESS,
        fn: faker.location.street,
        dhis2Fields: [
            'TEXT',
            'LONG_TEXT',
        ]
    },
    {
        name: SupportedDataTypeNames.CITY,
        fn: faker.location.city,
        dhis2Fields: [
            'TEXT',
            'LONG_TEXT',
        ]
    },
    {
        name: SupportedDataTypeNames.COUNTRY,
        fn: faker.location.county,
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
        ] as any,
        supportedParams: [
            {
                type: "text",
                label: "Format",
            }
        ]
    },
]

import {DataConfiguration} from "../script/interfaces";
import {DateTime} from "luxon";
import {SupportedDataTypeNames} from "../script/constants/dataTypes";

export const config: DataConfiguration = {
    id: "hiv",
    name: "HIV config",
    meta: {
        orgUnits: [
            'SafacSbYOOU',
            'qSexzLrSdVs'
        ],
        trackedEntityType: 'MCPQUTHX1Ze',
        enrollmentTimeBoundary: {
            min: DateTime.now().minus({year: 1}),
            max: DateTime.now()
        },
        locale: 'ar'
    },
    programStages: [
        {
            id: 'K5ac7u3V5bB',
            dataElements: [
                {
                    dataItemId: "fxXDe8OZ86q",
                    dataTypeName: SupportedDataTypeNames.DATE,
                },
                {
                    dataItemId: 'zsM4K8kNPSo',
                    dataTypeName: SupportedDataTypeNames.NUMBER
                },
                {
                    dataItemId: 'wslSIEQi8ab',
                    dataTypeName: SupportedDataTypeNames.BOOLEAN
                },
                {
                    dataItemId: 'Q4X7sPYqzNS',
                    dataTypeName: SupportedDataTypeNames.OPTIONS,
                    options: {
                        params: [
                            [
                                "MOBILE",
                                "VOLUNTARYCTC",
                                "OTHERCOMMUNITY"
                            ]
                        ]
                    }
                },

            ],
            eventTimeBoundary: {
                min: DateTime.now().minus({month: 2}),
                max: DateTime.now()
            }
        }
    ],
    attributes: [
        {
            dataItemId: 'sB1IHYu2xQT',
            dataTypeName: SupportedDataTypeNames.FIRST_NAME
        },
        {
            dataItemId: 'ENRjVGxVL6l',
            dataTypeName: SupportedDataTypeNames.LAST_NAME
        },
        {
            dataItemId: 'Z1rLc1rVHK8',
            dataTypeName: SupportedDataTypeNames.TRUE_ONLY,
        },
        {
            dataItemId: 'NI0QRzJvQ0k',
            dataTypeName: SupportedDataTypeNames.DATE_OF_BIRTH
        },
        {
            dataItemId: 'Jt68iauILtD',
            dataTypeName: SupportedDataTypeNames.OPTIONS,
            options: {
                params: [[
                    'MALE', 'FEMALE'
                ]]
            }
        },
        {
            dataItemId: 'Xhdn49gUd52',
            dataTypeName: SupportedDataTypeNames.PHYSICAL_ADDRESS,
        },
        {
            dataItemId: 'fctSQp5nAYl',
            dataTypeName: SupportedDataTypeNames.PHONE_NUMBER,
        },
    ]

}

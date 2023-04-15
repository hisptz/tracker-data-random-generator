import {NavItem} from "../interfaces";
import i18n from '@dhis2/d2-i18n';
import {Programs} from "../../Programs";
import {ProgramDataProfiles} from "../../ProgramDataProfiles";
import {DataProfileConfig} from "../../DataProfileConfig";

export const MAIN_NAV_ITEMS: NavItem[] = [
    {
        label: i18n.t("Program List"),
        path: "programs",
        subItems: [
            {
                path: "",
                element: Programs
            },
            {
                path: ":id",
                subItems: [
                    {
                        path: "",
                        element: ProgramDataProfiles
                    },
                    {
                        path: "config",
                        element: DataProfileConfig
                    }
                ]
            },
        ]
    }
]

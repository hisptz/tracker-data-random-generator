import {NavItem} from "../interfaces";
import i18n from '@dhis2/d2-i18n';
import {ProgramConfigList} from "../../ProgramConfigList";
import {Config} from "../../Config";
import {Outlet} from "react-router-dom";
import {ProgramList} from "../../ProgramList";

export const MAIN_NAV_ITEMS: NavItem[] = [
    {
        label: i18n.t("Program List"),
        path: "programs",
        subItems: [
            {
                path: "",
                element: ProgramList
            },
            {
                path: ":id",
                subItems: [
                    {
                        path: "",
                        element: ProgramConfigList
                    },
                    {
                        path: "config",
                        element: Config
                    }
                ]
            },
        ]
    }
]

import React from "react"
import {useSavedObject} from "@dhis2/app-service-datastore";
import {useNavigate, useParams} from "react-router-dom";
import {isEmpty} from "lodash";
import i18n from '@dhis2/d2-i18n';
import {useRecoilValue} from "recoil";
import {ProgramState} from "../../state/program";
import {Button, colors} from "@dhis2/ui"

export function DataProfiles() {
    const {id: programId} = useParams();
    const navigate = useNavigate();
    const program = useRecoilValue(ProgramState(programId)) as any;
    const [dataProfiles,] = useSavedObject(programId as string);

    if (isEmpty(dataProfiles)) {
        return (
            <div className="h-100  column gap-32 align-center center">
                <h2 style={{color: colors.grey700}}>{i18n.t("There are no data profiles for the program {{program}}. Click on Create data profile to create one.", {
                    program: program.displayName
                })}</h2>
                <Button onClick={() => navigate("config")} primary>
                    {i18n.t("Create data profile")}
                </Button>
            </div>
        )
    }

    return (
        <div>
            List coming up🙂!
        </div>
    )
}

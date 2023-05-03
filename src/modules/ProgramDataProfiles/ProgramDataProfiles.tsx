import React from "react"
import {useRecoilValue} from "recoil";
import {ProgramState} from "./state/program";
import {useNavigate, useParams} from "react-router-dom";
import {DataProfiles} from "./components/DataProfiles";
import {Button} from "@dhis2/ui"
import i18n from '@dhis2/d2-i18n';

export function ProgramDataProfiles() {
    const {id: programId} = useParams();
    const program = useRecoilValue(ProgramState(programId));
    const navigate = useNavigate();


    return (
        <div className="p-16 h-100 w-100 column gap-32">
            <div className="row">
                <Button onClick={() => navigate(-1)}>{i18n.t("Back to programs")}</Button>
            </div>
            <h1>{program.displayName}</h1>
            <DataProfiles/>
        </div>
    )
}

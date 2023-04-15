import React from "react"
import {useRecoilValue} from "recoil";
import {ProgramState} from "./state/program";
import {useParams} from "react-router-dom";
import {DataProfiles} from "./components/DataProfiles";


export function ProgramDataProfiles() {
    const {id: programId} = useParams();
    const program = useRecoilValue(ProgramState(programId));


    return (
        <div className="p-16 h-100 w-100 column gap-32">
            <h1>{program.displayName}</h1>
            <DataProfiles/>
        </div>
    )
}

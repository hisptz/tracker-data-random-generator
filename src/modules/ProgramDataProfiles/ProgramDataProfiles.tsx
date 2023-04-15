import React from "react"
import {useRecoilValue} from "recoil";
import {ProgramState} from "./state/program";
import {useParams} from "react-router-dom";


export function ProgramDataProfiles() {
    const {id: programId} = useParams();
    const program = useRecoilValue(ProgramState(programId));


    return (
        <div className="h-100 w-100 column">
            <h1>{program.displayName}</h1>
        </div>
    )
}

import React from "react"
import {useProgramsData} from "./hooks/data";
import {CircularLoader} from "@dhis2/ui"
import {ProgramTable} from "./components/ProgramTable";

export function ProgramList() {
    const data = useProgramsData();

    return (
        <div className="h-100 w-100 column p-16">
            <h1>Programs</h1>
            {
                data.loading && (<div className="w-100 h-100 center align-center column">
                    <CircularLoader small />
                </div>)
            }
            {
                !!data.data && (<ProgramTable {...data} />)
            }
        </div>
    )
}



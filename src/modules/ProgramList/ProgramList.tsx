import React, {useCallback} from "react"
import {useProgramsData} from "./hooks/data";
import {CircularLoader, InputField} from "@dhis2/ui"
import {ProgramTable} from "./components/ProgramTable";
import {useNavigate} from "react-router-dom";

export function ProgramList() {
    const navigate = useNavigate();
    const {loading, data, keyword, setKeyword, ...tableProps} = useProgramsData();

    const onRowClick = useCallback((rowId: string) => {
        navigate(`${rowId}`)
    }, [])

    return (
        <div className="h-100 w-100 column p-16 gap-16">
            <h1>Programs</h1>
            <div style={{maxWidth: 400}}>
                <InputField
                    value={keyword}
                    onChange={({value}: { value: string }) => setKeyword(value)}
                />
            </div>
            {
                loading && (<div className="w-100 h-100 center align-center column">
                    <CircularLoader small/>
                </div>)
            }
            {
                !!data && (<ProgramTable data={data} {...tableProps} onRowClick={onRowClick}/>)
            }
        </div>
    )
}



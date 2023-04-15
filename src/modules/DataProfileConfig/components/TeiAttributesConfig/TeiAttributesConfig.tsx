import React, {useMemo} from "react"
import {useRecoilValue} from "recoil";
import {ProgramState} from "../../../ProgramDataProfiles/state/program";
import {useParams} from "react-router-dom";
import {DataItemConfigField} from "../DataItemConfigField";


export function TeiAttributesConfig() {
    const {id: programId} = useParams();
    const program = useRecoilValue(ProgramState(programId));
    const trackedEntityAttributes = useMemo(() => program.programTrackedEntityAttributes?.map(({trackedEntityAttribute}: any) => trackedEntityAttribute), [program]);

    return (
        <div className="column gap-16">
            {
                trackedEntityAttributes.map((tea: any, fieldIndex: number) => (
                    <DataItemConfigField key={`${tea.id}-config`} name={`attributes.${fieldIndex}`} dataItem={tea}
                                         type="attribute"/>
                ))
            }
        </div>
    )
}

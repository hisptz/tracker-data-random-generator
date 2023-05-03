import React, {useMemo} from "react"
import {useRecoilValue} from "recoil";
import {ProgramState} from "../../../ProgramDataProfiles/state/program";
import {useParams} from "react-router-dom";
import {DataItemConfigField} from "../DataItemConfigField";


export function TeiAttributesConfig() {
    const {id: programId} = useParams();
    const program = useRecoilValue(ProgramState(programId));
    const trackedEntityAttributes = useMemo(() => program.programTrackedEntityAttributes?.map(({
                                                                                                   trackedEntityAttribute,
                                                                                                   mandatory
                                                                                               }: any) => ({
        ...trackedEntityAttribute,
        mandatory
    })), [program]);


    console.log(trackedEntityAttributes)

    return (
        <div className="column gap-16">
            {
                trackedEntityAttributes.map((tea: any, fieldIndex: number) => (
                    <DataItemConfigField required={tea.mandatory} key={`${tea.id}-config`}
                                         name={`attributes.${fieldIndex}`} dataItem={tea}
                    />
                ))
            }
        </div>
    )
}

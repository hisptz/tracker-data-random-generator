import {selectorFamily} from "recoil";
import {DataEngineState} from "../../../shared/state/engine";


const programQuery = {
    program: {
        resource: "programs",
        id: ({id}: any) => id,
        params: {
            fields: [
                'id',
                'displayName',
                'registration',
                'programTrackedEntityAttributes[trackedEntityAttribute[formName,name,id,valueType,optionSet[options[id,code,name]]]]',
                'programStages[programStageDataElements[dataElement[formName,name,id,valueType,optionSet[options[id,code,name]]]]]',
                'organisationUnits[id,name]'
            ]
        }
    }
}

export const ProgramState = selectorFamily<any, string | undefined>({
    key: "program-state",
    get: (id?: string) => async ({get}) => {
        const engine: any = get(DataEngineState);
        if (!engine || !id) {
            return;
        }
        const programData = await engine.query(programQuery, {
            variables: {
                id
            }
        })
        return programData?.program;
    }
})

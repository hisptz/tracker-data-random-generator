import {atom} from "recoil";
import {useDataEngine} from "@dhis2/app-runtime";


export type DataEngine = ReturnType<typeof useDataEngine>
export const DataEngineState = atom<DataEngine>({
		key: 'app-engine-state',
});



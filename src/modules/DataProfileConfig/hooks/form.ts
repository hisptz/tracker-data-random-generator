import {useParams} from "react-router-dom";
import {useSavedObject} from "@dhis2/app-service-datastore";
import {useMemo} from "react";
import {find} from "lodash";
import {DataConfigurationForm} from "../../../script/interfaces";


export function useDefaultValue() {
    const {configId, id: programId} = useParams();
    const [configs] = useSavedObject(programId as string);
    return useMemo(() => find(configs ?? [], ['id', configId]) as unknown as DataConfigurationForm, [configs, configId]);

}

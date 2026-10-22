import {useParams} from "react-router-dom";
import {useSavedObject} from "@dhis2/app-service-datastore";
import {useCallback, useMemo} from "react";
import {find} from "lodash";
import {DataConfigurationForm} from "../../../script/interfaces";
import {useAlert} from "@dhis2/app-runtime";
import i18n from '@dhis2/d2-i18n';


export function useDefaultValue() {
    const {configId, id: programId} = useParams();
    const [configs] = useSavedObject(programId as string);
    return useMemo(() => find(configs ?? [], ['id', configId]) as unknown as DataConfigurationForm, [configs, configId]);

}

// Passed to handleSubmit as the invalid handler to tell the user why the save did not happen
export function useInvalidFormAlert() {
    const {show} = useAlert(({message}) => message, ({type}) => ({...type, duration: 3000}));

    return useCallback(() => {
        show({
            message: i18n.t("The data profile can't be saved. Please fix the errors on the form and try again."),
            type: {critical: true}
        });
    }, [show]);
}

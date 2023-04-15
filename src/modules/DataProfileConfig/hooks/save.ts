import {useParams} from "react-router-dom";
import {useSavedObject} from "@dhis2/app-service-datastore";
import {useCallback} from "react";
import {DataConfigurationForm} from "../../../script/interfaces";
import {findIndex, set} from "lodash";
import {useAlert} from "@dhis2/app-runtime";
import i18n from '@dhis2/d2-i18n';
import {useBoolean} from "usehooks-ts";

export function useSaveConfig() {
    const {value: loading, setTrue, setFalse} = useBoolean(false);
    const {id: programId} = useParams();
    const [current, {update}] = useSavedObject(programId as string, {});
    const {show} = useAlert(({message}) => message, ({type}) => ({...type, duration: 3000}))

    const save = useCallback(async (data: DataConfigurationForm) => {
        try {
            setTrue();
            const index = findIndex(current as any ?? [], ['id', data.id]);
            if (index < 0) {
                const updatedValue = current as any ?? [];
                updatedValue.push(data);
                await update(updatedValue);
                show({message: i18n.t("Data profile created successfully"), type: {success: true}})
            } else {
                const updatedValue = current as Array<DataConfigurationForm>;
                set(updatedValue, [index], data);
                await update(updatedValue);
                show({message: i18n.t("Data profile updated successfully"), type: {success: true}})

            }
            setFalse()
        } catch (e) {
            setFalse();
            console.error(e)
        }
    }, [current])

    return {
        save,
        loading
    }
}

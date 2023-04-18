import {useParams} from "react-router-dom";
import {useSavedObject} from "@dhis2/app-service-datastore";
import {useCallback} from "react";
import {DataConfigurationForm} from "../../../script/interfaces";
import {findIndex, isEmpty, set} from "lodash";
import {useAlert} from "@dhis2/app-runtime";
import i18n from '@dhis2/d2-i18n';
import {useBoolean} from "usehooks-ts";

export function useSaveConfig() {
    const {value: loading, setTrue, setFalse} = useBoolean(false);
    const {id: programId} = useParams();
    const [current, {update, replace}] = useSavedObject(programId as string, {});
    const {show} = useAlert(({message}) => message, ({type}) => ({...type, duration: 3000}));

    console.log(current)

    const save = useCallback(async (data: DataConfigurationForm) => {
        try {
            setTrue();
            if (isEmpty(current)) {
                await replace([
                    data
                ])
                show({message: i18n.t("Data profile created successfully"), type: {success: true}})
            } else {
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
            }
        } catch (e) {
            console.error(e)
        } finally {
            setFalse();
        }
    }, [current])

    return {
        save,
        loading
    }
}

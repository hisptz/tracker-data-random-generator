import {useAlert, useDataMutation} from "@dhis2/app-runtime";
import {useCallback} from "react";
import {chunk} from "lodash";
import {asyncify, mapSeries} from "async-es";
import i18n from '@dhis2/d2-i18n';

export const uploadMutation: any = {
    type: "create",
    resource: "trackedEntityInstances",
    data: ({data}: any) => data
}


export function useUploadData() {
    const [upload, {loading, error}] = useDataMutation(uploadMutation);
    const {show} = useAlert(({message}) => message, ({type}) => ({...type, duration: 3000}))

    const uploadData = useCallback(async (data: any[]) => {
        const dataChunks = chunk(data, 50);

        const responses = await mapSeries(dataChunks, asyncify(async (data: any) => {
            return await upload({
                data: {
                    trackedEntityInstances: data
                }
            })
        }));
        console.log(responses)
        //TODO: better handle the responses to have a summary of how much data has been uploaded
        show({
            message: i18n.t("Uploaded {{count}} tracked entity instances successfully", {
                count: data.length
            }), type: {success: true}
        })

    }, [upload]);

    return {
        loading,
        uploadData,
        error
    }
}

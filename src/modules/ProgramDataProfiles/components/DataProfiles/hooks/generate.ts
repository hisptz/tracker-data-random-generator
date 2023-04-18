import {find} from "lodash";
import {useSavedObject} from "@dhis2/app-service-datastore";
import {useParams} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {ProgramState} from "../../../state/program";
import {useCallback} from "react";
import {GenerateConfig} from "../components/GenerateDataModal";
import {DataConfiguration, DataConfigurationForm} from "../../../../../script/interfaces";
import {TrackerRandomDataEngine} from "../../../../../script/engine";
import fileSaver from "file-saver"
import {useUploadData} from "./upload";

export function useExportData() {
    const exportData = useCallback(
        async (data: any) => {
            fileSaver.saveAs(new Blob([JSON.stringify(data)], {type: "text/json"}), "data.json",)
        },
        [],
    );
    return {
        exportData
    }
}

export function useGenerateData(profileId: string | null, onComplete: () => void) {
    const {id: programId} = useParams();
    const program = useRecoilValue(ProgramState(programId));
    const [profiles] = useSavedObject(programId as string)
    const profile: DataConfigurationForm | undefined = find(profiles, ['id', profileId]);
    const {exportData} = useExportData();
    const {loading: uploading, uploadData} = useUploadData();

    const generate = useCallback(async ({
                                            orgUnits,
                                            enrollmentTimeBoundary,
                                            count,
                                            shouldExportData,
                                            shouldUploadData
                                        }: GenerateConfig) => {
        if (!profile) {
            return;
        }
        const meta = {
            orgUnits,
            enrollmentTimeBoundary,
            trackedEntityType: program.trackedEntityType.id
        }
        const dataGenerateConfig: DataConfiguration = {
            meta,
            ...(profile as any)
        }
        const dataEngine = new TrackerRandomDataEngine({config: dataGenerateConfig, program});
        const data = dataEngine.generate({count});

        if (shouldExportData) {
            await exportData(data);
        }
        if (shouldUploadData) {
            await uploadData(data)
        }
        onComplete();
    }, [profile, program]);

    return {
        generate,
        uploading
    }
}

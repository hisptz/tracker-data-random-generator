import {find} from "lodash";
import {useSavedObject} from "@dhis2/app-service-datastore";
import {useParams} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {ProgramState} from "../../../state/program";
import {useCallback} from "react";
import {GenerateConfig} from "../components/GenerateDataModal";
import {DataConfiguration, DataConfigurationForm} from "../../../../../script/interfaces";
import fileSaver from "file-saver"
import {useUploadData} from "./upload";
import {TrackerRandomDataEngine} from "../../../../../script/engine";
import {useDataEngine} from "@dhis2/app-runtime";

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
		const engine = useDataEngine();
		const program = useRecoilValue(ProgramState(programId));
		const organisationUnits = program.organisationUnits;
		const [profiles] = useSavedObject(programId as string)
		const profile: DataConfigurationForm | undefined = find(profiles, ['id', profileId]);
		const {exportData} = useExportData();
		const {loading: uploading, uploadData} = useUploadData();

		const generate = useCallback(async ({
																						orgUnits,
																						stages,
																						enrollmentTimeBoundary,
																						count,
																						shouldExportData,
																						shouldUploadData
																				}: GenerateConfig) => {
				if (!profile) {
						return;
				}
				const meta = {
						orgUnits: organisationUnits.filter(({id}: any) => orgUnits.includes(id)),
						enrollmentTimeBoundary,
						trackedEntityType: program.trackedEntityType.id
				}
				const dataGenerateConfig: DataConfiguration = {
						meta,
						...(profile as any),
						programStages: (profile as any).programStages?.map((pStage: any) => {
								return {
										...pStage,
										eventTimeBoundary: find(stages, ['id', pStage.id])
								}
						})
				}

				const dataEngine = new TrackerRandomDataEngine({config: dataGenerateConfig, program, engine});
				const data = await dataEngine.generate({count});

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

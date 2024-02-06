import { find } from "lodash";
import { useSavedObject } from "@dhis2/app-service-datastore";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ProgramState } from "../../../state/program";
import { useCallback } from "react";
import {
	EventGenerateConfig,
	GenerateConfig,
} from "../components/GenerateDataModal";
import {
	DataConfiguration,
	DataConfigurationForm,
	EventDataConfigurationForm,
	EventProgramDataConfiguration,
} from "../../../../../script/interfaces";
import fileSaver from "file-saver";
import { useUploadData } from "./upload";
import {
	EventRandomDataEngine,
	TrackerRandomDataEngine,
} from "../../../../../script/engine";
import { useDataEngine } from "@dhis2/app-runtime";

export function useExportData() {
	const exportData = useCallback(async (data: any) => {
		fileSaver.saveAs(
			new Blob([JSON.stringify(data)], { type: "text/json" }),
			"data.json",
		);
	}, []);
	return {
		exportData,
	};
}

export function useGenerateData(
	profileId: string | null,
	onComplete: () => void,
) {
	const { id: programId } = useParams();
	const engine = useDataEngine();
	const program = useRecoilValue(ProgramState(programId));
	const organisationUnits = program?.organisationUnits;
	const [profiles] = useSavedObject(programId as string);
	const profile:
		| DataConfigurationForm
		| EventDataConfigurationForm
		| undefined = find(profiles, ["id", profileId]);
	const { exportData } = useExportData();
	const { loading: uploading, uploadData } = useUploadData(
		program?.registration ? "trackedEntityInstances" : "events",
	);

	const generateTrackerProgramData = useCallback(
		async ({
			orgUnits,
			stages,
			enrollmentTimeBoundary,
			count,
			shouldExportData,
			shouldUploadData,
		}: GenerateConfig) => {
			if (!profile || !program) {
				return;
			}
			const meta = {
				orgUnits: organisationUnits.filter(({ id }: { id: string }) =>
					orgUnits.includes(id),
				),
				enrollmentTimeBoundary,
				trackedEntityType: program?.trackedEntityType?.id,
			};
			const dataGenerateConfig: DataConfiguration = {
				meta,
				...(profile as any),
				programStages: (profile as any).programStages?.map(
					(pStage: any) => {
						return {
							...pStage,
							eventTimeBoundary: find(stages, ["id", pStage.id]),
						};
					},
				),
			};

			const dataEngine = new TrackerRandomDataEngine({
				config: dataGenerateConfig,
				program,
				engine,
			});
			const data = await dataEngine.generate({ count });

			if (shouldExportData) {
				await exportData(data);
			}
			if (shouldUploadData) {
				await uploadData(data);
			}
			onComplete();
		},
		[profile, program],
	);

	const generateEventProgramData = useCallback(
		async ({
			orgUnits,
			count,
			eventTimeBoundary,
			shouldExportData,
			shouldUploadData,
		}: EventGenerateConfig) => {
			if (!profile || !program) {
				return;
			}
			const meta = {
				orgUnits: organisationUnits.filter(({ id }: { id: string }) =>
					orgUnits.includes(id),
				),
				eventTimeBoundary,
			};

			const config: EventProgramDataConfiguration = {
				...(profile as EventDataConfigurationForm),
				count,
				meta,
			};

			const dataEngine = new EventRandomDataEngine({
				config,
				program,
				engine,
			});
			const data = await dataEngine.generate({ count });

			if (shouldExportData) {
				await exportData(data);
			}
			if (shouldUploadData) {
				await uploadData(data);
			}
			onComplete();
		},
		[profile, program],
	);

	const generate = useCallback(
		async (config: GenerateConfig | EventGenerateConfig) => {
			if (program?.registration) {
				return generateTrackerProgramData(config as GenerateConfig);
			}
			return generateEventProgramData(config as EventGenerateConfig);
		},
		[profile, program],
	);

	return {
		generate,
		uploading,
	};
}

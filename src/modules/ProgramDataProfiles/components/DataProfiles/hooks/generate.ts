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
import { useAlert, useDataEngine } from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";

export function useExportData() {
	const exportData = useCallback(async (data: unknown) => {
		fileSaver.saveAs(
			new Blob([JSON.stringify(data, null, 2)], {
				type: "application/json",
			}),
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
	const organisationUnits = program?.organisationUnits ?? [];
	const [profiles] = useSavedObject(programId as string);
	const profile = find(profiles, ["id", profileId]) as
		| DataConfigurationForm
		| EventDataConfigurationForm
		| undefined;
	const { exportData } = useExportData();
	const { loading: uploading, uploadData } = useUploadData();
	const { show } = useAlert(({ message }) => message, { critical: true });

	const getSelectedOrgUnits = useCallback(
		(orgUnits: string[]) =>
			organisationUnits.filter(({ id }: { id: string }) =>
				orgUnits.includes(id),
			),
		[organisationUnits],
	);

	const generateTrackerProgramData = useCallback(
		async ({
			orgUnits,
			stages,
			enrollmentTimeBoundary,
			count,
		}: GenerateConfig) => {
			const trackerProfile = profile as DataConfigurationForm;
			const config: DataConfiguration = {
				...trackerProfile,
				meta: {
					orgUnits: getSelectedOrgUnits(orgUnits),
					enrollmentTimeBoundary,
					trackedEntityType: program?.trackedEntityType?.id,
				},
				programStages: trackerProfile.programStages?.map((pStage) => {
					const stageConfig = find(stages, ["id", pStage.id]);
					return {
						...pStage,
						eventTimeBoundary: {
							min: stageConfig?.min,
							max: stageConfig?.max,
						},
					};
				}),
			};

			const dataEngine = new TrackerRandomDataEngine({
				config,
				program: program!,
				engine,
			});

			return dataEngine.generate({ count });
		},
		[profile, program, engine, getSelectedOrgUnits],
	);

	const generateEventProgramData = useCallback(
		async ({ orgUnits, count, eventTimeBoundary }: EventGenerateConfig) => {
			const config: EventProgramDataConfiguration = {
				...(profile as EventDataConfigurationForm),
				count,
				meta: {
					orgUnits: getSelectedOrgUnits(orgUnits),
					eventTimeBoundary,
				},
			};

			const dataEngine = new EventRandomDataEngine({
				config,
				program: program!,
				engine,
			});
			return dataEngine.generate({ count });
		},
		[profile, program, engine, getSelectedOrgUnits],
	);

	const generate = useCallback(
		async (config: GenerateConfig | EventGenerateConfig) => {
			if (!profile || !program) {
				return;
			}
			try {
				const count = Number(config.count);
				const data = program.registration
					? await generateTrackerProgramData({
							...(config as GenerateConfig),
							count,
						})
					: await generateEventProgramData({
							...(config as EventGenerateConfig),
							count,
						});

				if (config.shouldExportData) {
					await exportData(data);
				}
				if (config.shouldUploadData) {
					await uploadData(data);
				}
				onComplete();
			} catch (e) {
				console.error(e);
				show({
					message: i18n.t("Error generating data: {{message}}", {
						message: e instanceof Error ? e.message : "",
					}),
				});
			}
		},
		[
			profile,
			program,
			generateTrackerProgramData,
			generateEventProgramData,
			exportData,
			uploadData,
			onComplete,
			show,
		],
	);

	return {
		generate,
		uploading,
	};
}

import { useCallback } from "react";
import { useDataEngine } from "@dhis2/app-runtime";
import fileSaver from "file-saver";
import {
	DataConfiguration,
	DataConfigurationForm,
	EventDataConfigurationForm,
	EventProgramDataConfiguration,
	TrackerPayload,
} from "../../../script/interfaces";
import {
	EventRandomDataEngine,
	TrackerRandomDataEngine,
} from "../../../script/engine";
import { useCurrentProgram } from "../../../shared/components/ProgramProvider/ProgramProvider";
import { Profile } from "../../../shared/hooks/profiles";
import { GenerationRequest } from "../interfaces";

export function getDownloadFileName(profileName: string): string {
	const safeName = profileName
		.replace(/[^a-z0-9-_]+/gi, "-")
		.replace(/^-+|-+$/g, "");
	return `${safeName || "data"}-${new Date().toISOString().slice(0, 10)}.json`;
}

export function downloadPayload(payload: TrackerPayload, fileName: string) {
	fileSaver.saveAs(
		new Blob([JSON.stringify(payload, null, 2)], {
			type: "application/json",
		}),
		fileName,
	);
}

/*
 * Generates the tracker import payload for a profile. Generation happens in the browser, apart from
 * reserving values for auto generated attributes.
 */
export function useGeneratePayload(profile: Profile) {
	const engine = useDataEngine();
	const program = useCurrentProgram();

	return useCallback(
		async ({
			orgUnits,
			count,
			boundary,
			stageBoundaries,
		}: GenerationRequest): Promise<TrackerPayload> => {
			// The engine only reads the id, and the code for auto generated attributes
			const selectedOrgUnits = program.organisationUnits.filter(({ id }) =>
				orgUnits.includes(id),
			) as unknown as NonNullable<DataConfiguration["meta"]["orgUnits"]>;

			if (!program.registration) {
				const config: EventProgramDataConfiguration = {
					...(profile as EventDataConfigurationForm),
					count,
					meta: {
						orgUnits: selectedOrgUnits,
						eventTimeBoundary: boundary,
					},
				};
				return new EventRandomDataEngine({ config, program, engine }).generate({
					count,
				});
			}

			const trackerProfile = profile as DataConfigurationForm;
			const config: DataConfiguration = {
				...trackerProfile,
				meta: {
					orgUnits: selectedOrgUnits,
					enrollmentTimeBoundary: boundary,
					trackedEntityType: program.trackedEntityType?.id,
				},
				programStages: trackerProfile.programStages?.map((stage) => ({
					...stage,
					eventTimeBoundary: stageBoundaries[stage.id],
				})),
			};
			return new TrackerRandomDataEngine({ config, program, engine }).generate({
				count,
			});
		},
		[engine, program, profile],
	);
}

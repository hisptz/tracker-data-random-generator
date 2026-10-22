import { useParams } from "react-router-dom";
import { useSavedObject } from "@dhis2/app-service-datastore";
import { useCallback } from "react";
import { useAlert } from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import { DataConfigurationForm } from "../../../../../script/interfaces";

type SavedProfiles = [
	DataConfigurationForm[] | undefined,
	{ replace: (value: DataConfigurationForm[]) => Promise<void> },
];

export function useDeleteDataProfile() {
	const { id: programId } = useParams();
	const [current, { replace }] = useSavedObject(
		programId as string,
		{},
	) as unknown as SavedProfiles;
	const { show } = useAlert(
		({ message }) => message,
		({ type }) => ({ ...type, duration: 3000 }),
	);

	const deleteProfile = useCallback(
		async (profileId: string) => {
			try {
				await replace(
					(current ?? []).filter(({ id }) => id !== profileId),
				);
				show({
					message: i18n.t("Data profile deleted successfully"),
					type: { success: true },
				});
			} catch (e) {
				console.error(e);
				show({
					message: `${i18n.t("Could not delete data profile")}: ${
						e instanceof Error ? e.message : String(e)
					}`,
					type: { critical: true },
				});
			}
		},
		[current, replace, show],
	);

	return { deleteProfile };
}

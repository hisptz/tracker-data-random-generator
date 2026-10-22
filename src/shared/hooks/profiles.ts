import { useCallback, useMemo } from "react";
import { useSavedObject } from "@dhis2/app-service-datastore";
import { useAlert } from "@dhis2/app-runtime";
import i18n from "@dhis2/d2-i18n";
import { NO_ESCAPE } from "../utils/i18n";
import { uid } from "@hisptz/dhis2-utils";
import { cloneDeep, find } from "lodash";
import {
	DataConfigurationForm,
	EventDataConfigurationForm,
} from "../../script/interfaces";
import { useCurrentProgram } from "../components/ProgramProvider/ProgramProvider";

// Tracker programs save DataConfigurationForm profiles, event programs save EventDataConfigurationForm profiles
export type Profile = DataConfigurationForm | EventDataConfigurationForm;

type SavedProfiles = [
	Profile[] | Record<string, never> | undefined,
	{ replace: (value: Profile[]) => Promise<void> },
];

/*
 * Profiles are stored in the datastore as one array per program, under the program id.
 * Callers handle errors; success is confirmed with an alert.
 */
export function useProfiles() {
	const program = useCurrentProgram();
	const [value, { replace }] = useSavedObject(
		program.id,
	) as unknown as SavedProfiles;
	const profiles = useMemo(
		() => (Array.isArray(value) ? value : []),
		[value],
	);
	const { show } = useAlert(({ message }) => message, {
		success: true,
		duration: 3000,
	});

	const getProfile = useCallback(
		(id?: string) => (id ? find(profiles, ["id", id]) : undefined),
		[profiles],
	);

	const saveProfile = useCallback(
		async (profile: Profile) => {
			const exists = profiles.some(({ id }) => id === profile.id);
			await replace(
				exists
					? profiles.map((current) =>
							current.id === profile.id ? profile : current,
						)
					: [...profiles, profile],
			);
			show({ message: i18n.t("Profile saved") });
		},
		[profiles, replace, show],
	);

	const deleteProfile = useCallback(
		async (profileId: string) => {
			await replace(profiles.filter(({ id }) => id !== profileId));
			show({ message: i18n.t("Profile deleted") });
		},
		[profiles, replace, show],
	);

	const duplicateProfile = useCallback(
		async (profileId: string) => {
			const profile = getProfile(profileId);
			if (!profile) {
				return;
			}
			const copy: Profile = {
				...cloneDeep(profile),
				id: uid(),
				name: i18n.t("{{name}} (copy)", {
					name: profile.name,
					interpolation: NO_ESCAPE,
				}),
			};
			await replace([...profiles, copy]);
			show({ message: i18n.t("Profile duplicated") });
			return copy;
		},
		[profiles, getProfile, replace, show],
	);

	return {
		profiles,
		getProfile,
		saveProfile,
		deleteProfile,
		duplicateProfile,
	};
}

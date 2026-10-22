import { get } from "lodash";
import { GENERAL_SECTION_KEY, ProfileFormValues, ProfileSection } from "./sections";

export interface SectionStatus {
	configured: number;
	total: number;
	requiredMissing: number;
	errors: number;
}

// Counts the field errors in a (nested) react-hook-form errors object
export function countErrors(errors: unknown): number {
	if (!errors || typeof errors !== "object") {
		return 0;
	}
	// A field error is { type: string, message?, ref? }; anything else is a nested group of fields
	if (typeof (errors as { type?: unknown }).type === "string") {
		return 1;
	}
	return Object.values(errors as Record<string, unknown>).reduce<number>(
		(total, value) => total + countErrors(value),
		0,
	);
}

export function getGeneralStatus(
	values: Partial<ProfileFormValues>,
	errors: unknown,
): SectionStatus {
	const hasName = !!values?.name?.trim();
	return {
		configured: hasName ? 1 : 0,
		total: 1,
		requiredMissing: hasName ? 0 : 1,
		errors: countErrors(get(errors, "name")),
	};
}

export function getSectionStatus(
	section: ProfileSection,
	values: Partial<ProfileFormValues>,
	errors: unknown,
): SectionStatus {
	let configured = 0;
	let requiredMissing = 0;
	for (const { path, required } of section.fields) {
		const hasGenerator = !!get(values, `${path}.dataTypeName`);
		if (hasGenerator) {
			configured++;
		} else if (required) {
			requiredMissing++;
		}
	}
	return {
		configured,
		total: section.fields.length,
		requiredMissing,
		errors: countErrors(get(errors, section.path)),
	};
}

export function getStatuses(
	sections: ProfileSection[],
	values: Partial<ProfileFormValues>,
	errors: unknown,
): Record<string, SectionStatus> {
	return {
		[GENERAL_SECTION_KEY]: getGeneralStatus(values, errors),
		...Object.fromEntries(
			sections.map((section) => [
				section.key,
				getSectionStatus(section, values, errors),
			]),
		),
	};
}

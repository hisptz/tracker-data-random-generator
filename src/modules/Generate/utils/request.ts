import { DateTime } from "luxon";
import i18n from "@dhis2/d2-i18n";
import { ProgramMetadata } from "../../../shared/interfaces/program";
import {
	DateRangeFormValue,
	GenerateFormValues,
	GenerationRequest,
} from "../interfaces";
import { DEFAULT_DATE_PRESET, getPresetBoundary, TimeBoundary } from "./dates";

export const MAX_RECORDS = 500;
export const DEFAULT_RECORDS = 10;

export function getDefaultFormValues(program: ProgramMetadata): GenerateFormValues {
	return {
		orgUnits: [],
		range: { preset: DEFAULT_DATE_PRESET },
		stageRanges: program.registration
			? Object.fromEntries(
					(program.programStages ?? []).map(({ id }) => [id, { custom: false }]),
				)
			: {},
		count: String(DEFAULT_RECORDS),
		output: "upload",
		skipRuleEngine: false,
	};
}

function getBoundary(range: DateRangeFormValue, today: DateTime): TimeBoundary {
	if (range.preset === "CUSTOM") {
		return { min: range.start?.iso ?? "", max: range.end?.iso ?? "" };
	}
	return getPresetBoundary(range.preset, today);
}

// Turns validated form values into what the generator needs
export function getGenerationRequest(
	values: GenerateFormValues,
	today: DateTime = DateTime.now(),
): GenerationRequest {
	const stageBoundaries: Record<string, TimeBoundary> = {};
	for (const [stageId, range] of Object.entries(values.stageRanges ?? {})) {
		if (range?.custom && range.start?.iso && range.end?.iso) {
			stageBoundaries[stageId] = { min: range.start.iso, max: range.end.iso };
		}
	}

	return {
		orgUnits: values.orgUnits,
		count: Number(values.count),
		boundary: getBoundary(values.range, today),
		stageBoundaries,
		output: values.output,
		skipRuleEngine: values.output === "upload" && values.skipRuleEngine,
	};
}

export function validateRecordCount(value?: string | number): true | string {
	const count = Number(value);
	const isValid =
		value !== undefined &&
		value !== "" &&
		Number.isInteger(count) &&
		count >= 1 &&
		count <= MAX_RECORDS;
	return (
		isValid ||
		i18n.t("Enter a whole number from 1 to {{max}}", { max: MAX_RECORDS })
	);
}

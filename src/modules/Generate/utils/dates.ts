import { DateTime } from "luxon";
import i18n from "@dhis2/d2-i18n";

export type DatePreset = "LAST_30_DAYS" | "LAST_3_MONTHS" | "LAST_12_MONTHS" | "CUSTOM";

export const DEFAULT_DATE_PRESET: DatePreset = "LAST_12_MONTHS";

export function getDatePresetOptions(): { label: string; value: DatePreset }[] {
	return [
		{ label: i18n.t("Last 30 days"), value: "LAST_30_DAYS" },
		{ label: i18n.t("Last 3 months"), value: "LAST_3_MONTHS" },
		{ label: i18n.t("Last 12 months"), value: "LAST_12_MONTHS" },
		{ label: i18n.t("Custom"), value: "CUSTOM" },
	];
}

// A date picked in the user's calendar: `iso` is used for generation, `label` is what was picked
export interface CalendarDateValue {
	iso: string;
	label: string;
}

export interface TimeBoundary {
	min: string;
	max: string;
}

const ISO_DATE = "yyyy-MM-dd";

export function toIsoDate(date: DateTime): string {
	return date.toFormat(ISO_DATE);
}

/*
 * The start and end (both inclusive, as yyyy-MM-dd) of a preset ending today.
 */
export function getPresetBoundary(
	preset: Exclude<DatePreset, "CUSTOM">,
	today: DateTime = DateTime.now(),
): TimeBoundary {
	const end = today.startOf("day");
	switch (preset) {
		case "LAST_30_DAYS":
			return { min: toIsoDate(end.minus({ days: 29 })), max: toIsoDate(end) };
		case "LAST_3_MONTHS":
			return { min: toIsoDate(end.minus({ months: 3 })), max: toIsoDate(end) };
		case "LAST_12_MONTHS":
			return { min: toIsoDate(end.minus({ months: 12 })), max: toIsoDate(end) };
	}
}

/*
 * Both dates are required and can't be in the future, and the end can't be before the start.
 * Each side is true when valid, or an error message.
 */
export function validateDateRange(
	start: CalendarDateValue | undefined,
	end: CalendarDateValue | undefined,
	today: DateTime = DateTime.now(),
): { start: true | string; end: true | string } {
	const todayIso = toIsoDate(today);
	const futureMessage = i18n.t("The date can't be in the future");
	const result: { start: true | string; end: true | string } = {
		start: true,
		end: true,
	};
	if (!start?.iso) {
		result.start = i18n.t("Choose a start date");
	} else if (start.iso > todayIso) {
		result.start = futureMessage;
	}
	if (!end?.iso) {
		result.end = i18n.t("Choose an end date");
	} else if (end.iso > todayIso) {
		result.end = futureMessage;
	} else if (start?.iso && end.iso < start.iso) {
		result.end = i18n.t("The end date can't be before the start date");
	}
	return result;
}

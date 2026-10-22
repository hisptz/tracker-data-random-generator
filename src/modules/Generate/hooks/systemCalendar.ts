import { useConfig } from "@dhis2/app-runtime";
import { ComponentProps } from "react";
import { CalendarInput } from "@dhis2/ui";

export type SupportedCalendar = ComponentProps<typeof CalendarInput>["calendar"];

// DHIS2 calendar ids and their Temporal equivalents (as in @dhis2/multi-calendar-dates)
const DHIS2_CALENDARS: Record<string, SupportedCalendar> = {
	ethiopian: "ethiopic",
	coptic: "coptic",
	gregorian: "gregory",
	islamic: "islamic",
	iso8601: "iso8601",
	nepali: "nepali",
	thai: "buddhist",
	persian: "persian",
};

/*
 * The calendar configured for the DHIS2 instance, from /api/system/info. Calendars the date picker
 * doesn't support (such as Julian) fall back to Gregorian.
 */
export function useSystemCalendar(): SupportedCalendar {
	const { systemInfo } = useConfig();
	const calendar = (systemInfo as { calendar?: string } | undefined)?.calendar;
	return (calendar && DHIS2_CALENDARS[calendar]) || "gregory";
}

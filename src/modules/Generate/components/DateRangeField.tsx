import React from "react";
import { Controller, useWatch } from "react-hook-form";
import { Field, SegmentedControl } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { get } from "lodash";
import { DateRangeFormValue } from "../interfaces";
import {
	CalendarDateValue,
	DatePreset,
	getDatePresetOptions,
	getPresetBoundary,
	validateDateRange,
} from "../utils/dates";
import { CalendarDateField } from "./CalendarDateField";
import { useSystemCalendar } from "../hooks/systemCalendar";
import styles from "./DateRangeField.module.css";

export interface DateRangeFieldProps {
	name: string;
	label: string;
}

// Preset dates are calculated in ISO, so they are only spelled out when the instance uses that calendar
function PresetSummary({ preset }: { preset: Exclude<DatePreset, "CUSTOM"> }) {
	const calendar = useSystemCalendar();
	if (calendar !== "gregory" && calendar !== "iso8601") {
		return null;
	}
	const { min, max } = getPresetBoundary(preset);
	return (
		<p className={styles.summary}>
			{i18n.t("From {{start}} to {{end}}", { start: min, end: max })}
		</p>
	);
}

/*
 * Custom start and end dates. Validation of one end depends on the other, so each re-validates its pair.
 */
export function CustomDateRange({ name }: { name: string }) {
	const validateStart = (value: CalendarDateValue | undefined, values: unknown) =>
		validateDateRange(value, get(values, `${name}.end`)).start;
	const validateEnd = (value: CalendarDateValue | undefined, values: unknown) =>
		validateDateRange(get(values, `${name}.start`), value).end;

	return (
		<div className={styles.dates}>
			<CalendarDateField
				name={`${name}.start`}
				label={i18n.t("Start date")}
				validate={validateStart}
				deps={[`${name}.end`]}
			/>
			<CalendarDateField
				name={`${name}.end`}
				label={i18n.t("End date")}
				validate={validateEnd}
				deps={[`${name}.start`]}
			/>
		</div>
	);
}

export function DateRangeField({ name, label }: DateRangeFieldProps) {
	const preset = useWatch({ name: `${name}.preset` }) as DateRangeFormValue["preset"];

	return (
		<Field label={label}>
			<div className={styles.container}>
				<Controller
					name={`${name}.preset`}
					render={({ field }) => (
						<SegmentedControl
							options={getDatePresetOptions()}
							selected={field.value}
							onChange={({ value }) => field.onChange(value)}
						/>
					)}
				/>
				{preset === "CUSTOM" ? (
					<CustomDateRange name={name} />
				) : (
					<PresetSummary preset={preset} />
				)}
			</div>
		</Field>
	);
}

import React, { ComponentProps, FC } from "react";
import { Controller, FieldValues, Validate } from "react-hook-form";
import { CalendarInput } from "@dhis2/ui";
import { useSystemCalendar } from "../hooks/systemCalendar";
import { CalendarDateValue } from "../utils/dates";
import styles from "./CalendarDateField.module.css";

// The type definitions leave out `label` and `clearable`, which CalendarInput passes on and supports
const LabelledCalendarInput = CalendarInput as unknown as FC<
	ComponentProps<typeof CalendarInput> & { label?: string; clearable?: boolean }
>;

interface SelectedDate {
	calendarDateString: string;
	calendarDate: { withCalendar: (calendar: string) => { toPlainDate: () => { toString: () => string } } };
}

export interface CalendarDateFieldProps {
	name: string;
	label: string;
	validate: Validate<CalendarDateValue | undefined, FieldValues>;
	// Fields to re-validate when this one changes, such as the other end of a range
	deps?: string[];
}

/*
 * A date picked in the instance's calendar. The value keeps the ISO date for generation and the
 * picked date for display.
 */
export function CalendarDateField({ name, label, validate, deps }: CalendarDateFieldProps) {
	const calendar = useSystemCalendar();

	return (
		<Controller
			name={name}
			rules={{ validate, deps }}
			render={({ field, fieldState }) => (
				<div className={styles.field}>
					<LabelledCalendarInput
						dense
						required
						clearable
						label={label}
						calendar={calendar}
						date={(field.value as CalendarDateValue | undefined)?.label}
						error={!!fieldState.error}
						validationText={fieldState.error?.message}
						onBlur={field.onBlur}
						onDateSelect={(selected: SelectedDate | null) => {
							field.onChange(
								selected
									? {
											iso: selected.calendarDate
												.withCalendar("iso8601")
												.toPlainDate()
												.toString(),
											label: selected.calendarDateString,
										}
									: undefined,
							);
						}}
					/>
				</div>
			)}
		/>
	);
}

import { CalendarDateValue, DatePreset, TimeBoundary } from "../utils/dates";

export type OutputType = "upload" | "download";

export interface DateRangeFormValue {
	preset: DatePreset;
	start?: CalendarDateValue;
	end?: CalendarDateValue;
}

export interface StageRangeFormValue {
	custom: boolean;
	start?: CalendarDateValue;
	end?: CalendarDateValue;
}

export interface GenerateFormValues {
	orgUnits: string[];
	// Enrollment dates for tracker programs, event dates for event programs
	range: DateRangeFormValue;
	// Keyed by program stage id
	stageRanges: Record<string, StageRangeFormValue>;
	count: string;
	output: OutputType;
	skipRuleEngine: boolean;
}

// What the generation engine needs, resolved from the form
export interface GenerationRequest {
	orgUnits: string[];
	count: number;
	// Enrollment dates for tracker programs, event dates for event programs
	boundary: TimeBoundary;
	// Only stages with a custom range; the others default to the enrollment date until today
	stageBoundaries: Record<string, TimeBoundary>;
	output: OutputType;
	skipRuleEngine: boolean;
}

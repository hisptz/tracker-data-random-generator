import { describe, expect, it } from "@jest/globals";
import { DateTime } from "luxon";
import { getPresetBoundary, validateDateRange } from "../dates";

const today = DateTime.fromISO("2026-03-31T15:30:00");

function date(iso: string) {
	return { iso, label: iso };
}

describe("getPresetBoundary", () => {
	it("covers the last 30 days including today", () => {
		expect(getPresetBoundary("LAST_30_DAYS", today)).toEqual({
			min: "2026-03-02",
			max: "2026-03-31",
		});
	});

	it("covers the last 3 and 12 months", () => {
		expect(getPresetBoundary("LAST_3_MONTHS", today)).toEqual({
			min: "2025-12-31",
			max: "2026-03-31",
		});
		expect(getPresetBoundary("LAST_12_MONTHS", today)).toEqual({
			min: "2025-03-31",
			max: "2026-03-31",
		});
	});
});

describe("validateDateRange", () => {
	it("accepts a range up to today", () => {
		expect(
			validateDateRange(date("2026-01-01"), date("2026-03-31"), today),
		).toEqual({ start: true, end: true });
	});

	it("requires both dates", () => {
		const result = validateDateRange(undefined, undefined, today);
		expect(result.start).toEqual(expect.any(String));
		expect(result.end).toEqual(expect.any(String));
	});

	it("rejects future dates", () => {
		const result = validateDateRange(date("2026-04-01"), date("2026-04-02"), today);
		expect(result.start).toEqual(expect.any(String));
		expect(result.end).toEqual(expect.any(String));
	});

	it("rejects an end before the start", () => {
		const result = validateDateRange(date("2026-02-01"), date("2026-01-01"), today);
		expect(result.start).toBe(true);
		expect(result.end).toEqual(expect.any(String));
	});
});

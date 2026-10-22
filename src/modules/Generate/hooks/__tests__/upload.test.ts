import { describe, expect, it } from "@jest/globals";
import { range } from "lodash";
import {
	TrackerEnrollment,
	TrackerEvent,
	TrackerTrackedEntity,
} from "../../../../script/interfaces";
import { CHUNK_SIZE, chunkPayload } from "../upload";

function trackedEntity(index: number): TrackerTrackedEntity {
	return {
		trackedEntity: `te${index}`,
		trackedEntityType: "person",
		orgUnit: "ou",
		attributes: [],
	};
}

function enrollment(index: number): TrackerEnrollment {
	return {
		enrollment: `en${index}`,
		trackedEntity: `te${index}`,
		program: "program",
		orgUnit: "ou",
		status: "ACTIVE",
		enrolledAt: "2026-01-01",
		occurredAt: "2026-01-01",
	};
}

function event(index: number, trackedEntityIndex?: number): TrackerEvent {
	return {
		event: `ev${index}`,
		program: "program",
		programStage: "stage",
		orgUnit: "ou",
		occurredAt: "2026-01-02",
		status: "COMPLETED",
		dataValues: [],
		...(trackedEntityIndex === undefined
			? {}
			: {
					trackedEntity: `te${trackedEntityIndex}`,
					enrollment: `en${trackedEntityIndex}`,
				}),
	};
}

describe("chunkPayload", () => {
	it("keeps tracked entities with their enrollments and events", () => {
		const count = CHUNK_SIZE * 2 + 10;
		const chunks = chunkPayload({
			trackedEntities: range(count).map(trackedEntity),
			enrollments: range(count).map(enrollment),
			// Two events per tracked entity
			events: range(count * 2).map((index) => event(index, index % count)),
		});

		expect(chunks.map(({ trackedEntities }) => trackedEntities.length)).toEqual([
			CHUNK_SIZE,
			CHUNK_SIZE,
			10,
		]);
		for (const { trackedEntities, enrollments, events } of chunks) {
			const ids = trackedEntities.map(({ trackedEntity: id }) => id);
			expect(enrollments.map(({ trackedEntity: id }) => id)).toEqual(ids);
			expect(events).toHaveLength(ids.length * 2);
			expect(events.every(({ trackedEntity: id }) => ids.includes(id as string))).toBe(
				true,
			);
		}
	});

	it("splits single events of event programs", () => {
		const chunks = chunkPayload({
			trackedEntities: [],
			enrollments: [],
			events: range(CHUNK_SIZE + 1).map((index) => event(index)),
		});
		expect(chunks.map(({ events }) => events.length)).toEqual([CHUNK_SIZE, 1]);
		expect(chunks.every(({ trackedEntities }) => trackedEntities.length === 0)).toBe(
			true,
		);
	});

	it("returns no chunks for an empty payload", () => {
		expect(chunkPayload({ trackedEntities: [], enrollments: [], events: [] })).toEqual(
			[],
		);
	});
});

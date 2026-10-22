import { chunk, get } from "lodash";
import { TrackerPayload } from "../../../script/interfaces";
import { DataEngine } from "../../../shared/interfaces/program";

export interface ImportErrorReport {
	message: string;
	errorCode?: string;
	trackerType?: string;
	uid?: string;
}

export interface ImportReport {
	status: "OK" | "WARNING" | "ERROR";
	stats?: {
		created: number;
		updated: number;
		deleted: number;
		ignored: number;
		total: number;
	};
	validationReport?: {
		errorReports?: ImportErrorReport[];
	};
}

/*
 * Uses the tracker importer (POST /api/tracker). The deprecated trackedEntityInstances and events
 * endpoints were removed in DHIS2 2.41.
 * The payload is flat ({ trackedEntities, enrollments, events }) with records linked by UID.
 */
const uploadMutation = {
	type: "create" as const,
	resource: "tracker",
	params: ({ skipRuleEngine }: Record<string, unknown>) => ({
		async: false,
		importStrategy: "CREATE",
		atomicMode: "OBJECT",
		reportMode: "ERRORS",
		skipRuleEngine: !!skipRuleEngine,
	}),
	data: ({ data }: Record<string, unknown>) => data as Record<string, unknown>,
};

export const CHUNK_SIZE = 50;

/*
 * Splits the payload into requests of at most CHUNK_SIZE tracked entities (or events for event programs),
 * keeping each tracked entity in the same request as its enrollments and events.
 */
export function chunkPayload({
	trackedEntities,
	enrollments,
	events,
}: TrackerPayload): TrackerPayload[] {
	const singleEvents = events.filter(({ trackedEntity }) => !trackedEntity);
	const trackedEntityChunks = chunk(trackedEntities, CHUNK_SIZE).map(
		(trackedEntitiesChunk) => {
			const ids = new Set(
				trackedEntitiesChunk.map(({ trackedEntity }) => trackedEntity),
			);
			return {
				trackedEntities: trackedEntitiesChunk,
				enrollments: enrollments.filter(({ trackedEntity }) =>
					ids.has(trackedEntity),
				),
				events: events.filter(
					({ trackedEntity }) => !!trackedEntity && ids.has(trackedEntity),
				),
			};
		},
	);
	const singleEventChunks = chunk(singleEvents, CHUNK_SIZE).map((eventsChunk) => ({
		trackedEntities: [],
		enrollments: [],
		events: eventsChunk,
	}));
	return [...trackedEntityChunks, ...singleEventChunks];
}

/*
 * Uploads one chunk and returns its import report. Validation errors are part of the report;
 * only requests that fail without a report throw.
 */
export async function uploadChunk(
	engine: DataEngine,
	payloadChunk: TrackerPayload,
	{ skipRuleEngine = false }: { skipRuleEngine?: boolean } = {},
): Promise<ImportReport> {
	try {
		return (await engine.mutate(uploadMutation, {
			variables: { data: payloadChunk, skipRuleEngine },
		})) as unknown as ImportReport;
	} catch (e) {
		// The importer responds with 409 and the import report when there are validation errors
		const report = get(e, "details") as ImportReport | undefined;
		if (!report?.status) {
			throw e;
		}
		return report;
	}
}

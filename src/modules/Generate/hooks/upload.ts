import { useAlert, useDataEngine } from "@dhis2/app-runtime";
import { useCallback, useState } from "react";
import { chunk, get, isEmpty } from "lodash";
import i18n from "@dhis2/d2-i18n";
import { TrackerPayload } from "../../../script/interfaces";

interface ImportReport {
	status: "OK" | "WARNING" | "ERROR";
	stats?: {
		created: number;
		updated: number;
		deleted: number;
		ignored: number;
		total: number;
	};
	validationReport?: {
		errorReports?: { message: string; errorCode: string; uid: string }[];
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
	data: ({ data }: Record<string, unknown>) =>
		data as Record<string, unknown>,
};

const CHUNK_SIZE = 50;

/*
 * Splits the payload into requests of at most CHUNK_SIZE tracked entities (or events for event programs),
 * keeping each tracked entity in the same request as its enrollments and events.
 */
function chunkPayload({
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
					({ trackedEntity }) =>
						!!trackedEntity && ids.has(trackedEntity),
				),
			};
		},
	);
	const singleEventChunks = chunk(singleEvents, CHUNK_SIZE).map(
		(eventsChunk) => ({
			trackedEntities: [],
			enrollments: [],
			events: eventsChunk,
		}),
	);
	return [...trackedEntityChunks, ...singleEventChunks];
}

export function useUploadData() {
	const engine = useDataEngine();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const { show } = useAlert(
		({ message }) => message,
		({ type }) => ({ ...type, duration: 5000 }),
	);

	const uploadData = useCallback(
		async (
			payload: TrackerPayload,
			{ skipRuleEngine = false }: { skipRuleEngine?: boolean } = {},
		) => {
			setLoading(true);
			setError(null);
			const totals = { created: 0, ignored: 0 };
			const errors: string[] = [];

			try {
				for (const payloadChunk of chunkPayload(payload)) {
					let report: ImportReport | undefined;
					try {
						report = (await engine.mutate(uploadMutation, {
							variables: { data: payloadChunk, skipRuleEngine },
						})) as unknown as ImportReport;
					} catch (e) {
						// The importer responds with 409 and the import report when there are validation errors
						report = get(e, "details") as ImportReport | undefined;
						if (!report?.status) {
							throw e;
						}
					}
					totals.created += report?.stats?.created ?? 0;
					totals.ignored += report?.stats?.ignored ?? 0;
					errors.push(
						...(report?.validationReport?.errorReports?.map(
							({ message }) => message,
						) ?? []),
					);
				}

				if (!isEmpty(errors)) {
					console.error("Tracker import errors", errors);
				}

				show({
					message: isEmpty(errors)
						? i18n.t(
								"Upload complete: {{created}} records created",
								totals,
							)
						: i18n.t(
								"Upload complete: {{created}} records created, {{ignored}} ignored. First error: {{error}}",
								{
								created: totals.created,
								ignored: totals.ignored,
								error: errors[0],
							},
							),
					type: isEmpty(errors)
						? { success: true }
						: { warning: true },
				});
			} catch (e) {
				setError(e as Error);
				throw e;
			} finally {
				setLoading(false);
			}
		},
		[engine, show],
	);

	return {
		loading,
		uploadData,
		error,
	};
}

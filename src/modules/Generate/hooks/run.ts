import { useCallback, useEffect, useRef, useState } from "react";
import { useDataEngine } from "@dhis2/app-runtime";
import { TrackerPayload } from "../../../script/interfaces";
import { Profile } from "../../../shared/hooks/profiles";
import { GenerationRequest } from "../interfaces";
import { downloadPayload, getDownloadFileName, useGeneratePayload } from "./generate";
import { chunkPayload, ImportErrorReport, uploadChunk } from "./upload";

export type RunStatus =
	| "generating"
	| "uploading"
	| "stopping"
	| "done"
	| "stopped"
	| "failed";

export interface RunState {
	status: RunStatus;
	request: GenerationRequest;
	payload?: TrackerPayload;
	totalChunks: number;
	completedChunks: number;
	created: number;
	ignored: number;
	errors: ImportErrorReport[];
	// Set when generation or a request failed
	error?: string;
}

export function isRunActive(run: RunState | null): boolean {
	return (
		!!run &&
		(run.status === "generating" ||
			run.status === "uploading" ||
			run.status === "stopping")
	);
}

function getMessage(error: unknown): string {
	return error instanceof Error ? error.message : String(error);
}

/*
 * Generates the data, then downloads it or uploads it chunk by chunk. Stopping takes effect between
 * chunks, so the chunk being uploaded always finishes.
 */
export function useGenerationRun(profile: Profile) {
	const engine = useDataEngine();
	const generatePayload = useGeneratePayload(profile);
	const [run, setRun] = useState<RunState | null>(null);
	const stopRequested = useRef(false);
	const mounted = useRef(true);

	useEffect(
		() => () => {
			mounted.current = false;
		},
		[],
	);

	const update = useCallback((changes: Partial<RunState>) => {
		if (mounted.current) {
			setRun((current) => (current ? { ...current, ...changes } : current));
		}
	}, []);

	const start = useCallback(
		async (request: GenerationRequest) => {
			stopRequested.current = false;
			setRun({
				status: "generating",
				request,
				totalChunks: 0,
				completedChunks: 0,
				created: 0,
				ignored: 0,
				errors: [],
			});

			let payload: TrackerPayload;
			try {
				payload = await generatePayload(request);
			} catch (e) {
				console.error(e);
				update({ status: "failed", error: getMessage(e) });
				return;
			}

			if (request.output === "download") {
				downloadPayload(payload, getDownloadFileName(profile.name));
				update({ status: "done", payload });
				return;
			}

			const chunks = chunkPayload(payload);
			update({ status: "uploading", payload, totalChunks: chunks.length });

			let created = 0;
			let ignored = 0;
			const errors: ImportErrorReport[] = [];
			for (const [index, payloadChunk] of chunks.entries()) {
				if (stopRequested.current) {
					update({ status: "stopped" });
					return;
				}
				try {
					const report = await uploadChunk(engine, payloadChunk, {
						skipRuleEngine: request.skipRuleEngine,
					});
					created += report.stats?.created ?? 0;
					ignored += report.stats?.ignored ?? 0;
					errors.push(...(report.validationReport?.errorReports ?? []));
				} catch (e) {
					console.error(e);
					update({ status: "failed", error: getMessage(e) });
					return;
				}
				update({
					completedChunks: index + 1,
					created,
					ignored,
					errors: [...errors],
				});
			}
			update({ status: "done" });
		},
		[engine, generatePayload, profile.name, update],
	);

	const stop = useCallback(() => {
		stopRequested.current = true;
		update({ status: "stopping" });
	}, [update]);

	const reset = useCallback(() => setRun(null), []);

	return { run, start, stop, reset };
}

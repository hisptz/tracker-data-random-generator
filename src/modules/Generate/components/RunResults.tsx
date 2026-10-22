import React from "react";
import {
	Button,
	ButtonStrip,
	CircularLoader,
	DataTable,
	DataTableBody,
	DataTableCell,
	DataTableColumnHeader,
	DataTableHead,
	DataTableRow,
	IconDownload16,
	LinearLoader,
	NoticeBox,
} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { RunState } from "../hooks/run";
import { CHUNK_SIZE } from "../hooks/upload";
import styles from "./RunResults.module.css";

const MAX_LISTED_ERRORS = 100;

export interface RunResultsProps {
	run: RunState;
	onStop: () => void;
	onDownload: () => void;
	onGenerateAgain: () => void;
	onDone: () => void;
}

function Progress({ run, onStop }: Pick<RunResultsProps, "run" | "onStop">) {
	if (run.status === "generating") {
		return (
			<div className={styles.progress}>
				<div className={styles.progressLine}>
					<CircularLoader extrasmall />
					<span>{i18n.t("Generating records...")}</span>
				</div>
			</div>
		);
	}

	const percent =
		run.totalChunks > 0
			? Math.round((run.completedChunks / run.totalChunks) * 100)
			: 0;
	return (
		<div className={styles.progress}>
			<LinearLoader amount={percent} margin="0" width="100%" />
			<div className={styles.progressLine}>
				<span>
					{run.status === "stopping"
						? i18n.t("Stopping after the current batch...")
						: i18n.t("Uploading batch {{current}} of {{total}}", {
								current: Math.min(run.completedChunks + 1, run.totalChunks),
								total: run.totalChunks,
							})}
				</span>
				<Button small secondary disabled={run.status === "stopping"} onClick={onStop}>
					{i18n.t("Stop")}
				</Button>
			</div>
			<p className={styles.hint}>
				{i18n.t(
					"Records are uploaded in batches of {{size}}. Stopping keeps the batches that were already uploaded.",
					{ size: CHUNK_SIZE },
				)}
			</p>
		</div>
	);
}

function Outcome({ run }: { run: RunState }) {
	const uploaded = i18n.t("{{completed}} of {{total}} batches were uploaded.", {
		completed: run.completedChunks,
		total: run.totalChunks,
	});

	switch (run.status) {
		case "failed":
			return (
				<NoticeBox
					error
					title={
						run.payload
							? i18n.t("The upload failed")
							: i18n.t("The data could not be generated")
					}
				>
					{run.error}
					{run.payload && run.completedChunks > 0 && (
						<p className={styles.noticeDetail}>
							{uploaded}{" "}
							{i18n.t("Records from those batches stay in DHIS2.")}
						</p>
					)}
				</NoticeBox>
			);
		case "stopped":
			return (
				<NoticeBox warning title={i18n.t("The upload was stopped")}>
					{uploaded} {i18n.t("Records from those batches stay in DHIS2.")}
				</NoticeBox>
			);
		case "done":
			if (run.request.output === "download") {
				return (
					<NoticeBox valid title={i18n.t("The JSON file is downloading")}>
						{i18n.t(
							"Nothing was uploaded. You can import the file later with the Import/Export app.",
						)}
					</NoticeBox>
				);
			}
			if (run.errors.length > 0 || run.ignored > 0) {
				return (
					<NoticeBox warning title={i18n.t("The upload finished with errors")}>
						{i18n.t(
							"Some records were not imported. The errors are listed below.",
						)}
					</NoticeBox>
				);
			}
			return (
				<NoticeBox valid title={i18n.t("The upload is complete")}>
					{i18n.t("All generated records were imported.")}
				</NoticeBox>
			);
		default:
			return null;
	}
}

function Summary({ run }: { run: RunState }) {
	const { payload } = run;
	if (!payload) {
		return null;
	}
	const items = [
		...(run.request.output === "upload"
			? [
					// The importer counts tracked entities, enrollments and events together
					{ label: i18n.t("Objects created in DHIS2"), value: run.created },
					{ label: i18n.t("Objects ignored"), value: run.ignored },
				]
			: []),
		...(payload.trackedEntities.length > 0
			? [
					{
						label: i18n.t("Tracked entities generated"),
						value: payload.trackedEntities.length,
					},
					{
						label: i18n.t("Enrollments generated"),
						value: payload.enrollments.length,
					},
				]
			: []),
		{ label: i18n.t("Events generated"), value: payload.events.length },
	];

	return (
		<dl className={styles.summary}>
			{items.map(({ label, value }) => (
				<div key={label} className={styles.summaryItem}>
					<dt>{label}</dt>
					<dd>{value}</dd>
				</div>
			))}
		</dl>
	);
}

function ErrorTable({ run }: { run: RunState }) {
	if (run.errors.length === 0) {
		return null;
	}
	const listed = run.errors.slice(0, MAX_LISTED_ERRORS);

	return (
		<div className={styles.errors}>
			<h2 className={styles.heading}>{i18n.t("Import errors")}</h2>
			{run.errors.length > MAX_LISTED_ERRORS && (
				<p className={styles.hint}>
					{i18n.t("Showing the first {{shown}} of {{total}} errors.", {
						shown: MAX_LISTED_ERRORS,
						total: run.errors.length,
					})}
				</p>
			)}
			<div className={styles.tableContainer}>
				<DataTable>
					<DataTableHead>
						<DataTableRow>
							<DataTableColumnHeader>{i18n.t("Type")}</DataTableColumnHeader>
							<DataTableColumnHeader>{i18n.t("Record")}</DataTableColumnHeader>
							<DataTableColumnHeader>{i18n.t("Code")}</DataTableColumnHeader>
							<DataTableColumnHeader>{i18n.t("Message")}</DataTableColumnHeader>
						</DataTableRow>
					</DataTableHead>
					<DataTableBody>
						{listed.map(({ trackerType, uid, errorCode, message }, index) => (
							<DataTableRow key={`${uid}-${errorCode}-${index}`}>
								<DataTableCell>{trackerType ?? ""}</DataTableCell>
								<DataTableCell>
									<code>{uid ?? ""}</code>
								</DataTableCell>
								<DataTableCell>{errorCode ?? ""}</DataTableCell>
								<DataTableCell>{message}</DataTableCell>
							</DataTableRow>
						))}
					</DataTableBody>
				</DataTable>
			</div>
		</div>
	);
}

export function RunResults({
	run,
	onStop,
	onDownload,
	onGenerateAgain,
	onDone,
}: RunResultsProps) {
	const active =
		run.status === "generating" ||
		run.status === "uploading" ||
		run.status === "stopping";

	return (
		<div className={styles.container} aria-live="polite">
			{active ? <Progress run={run} onStop={onStop} /> : <Outcome run={run} />}
			<Summary run={run} />
			<ErrorTable run={run} />
			{!active && (
				<ButtonStrip>
					<Button primary onClick={onGenerateAgain}>
						{i18n.t("Generate again")}
					</Button>
					{run.payload && (
						<Button secondary icon={<IconDownload16 />} onClick={onDownload}>
							{i18n.t("Download generated JSON")}
						</Button>
					)}
					<Button secondary onClick={onDone}>
						{i18n.t("Back to profiles")}
					</Button>
				</ButtonStrip>
			)}
		</div>
	);
}

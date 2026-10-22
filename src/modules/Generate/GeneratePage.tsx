import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { Button, ButtonStrip, NoticeBox } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { NO_ESCAPE } from "../../shared/utils/i18n";
import { RHFTextInputField } from "@hisptz/dhis2-ui";
import { useCurrentProgram } from "../../shared/components/ProgramProvider/ProgramProvider";
import { Page } from "../../shared/components/Page/Page";
import { ConfirmLeaveModal } from "../../shared/components/ConfirmLeaveModal/ConfirmLeaveModal";
import { Profile, useProfiles } from "../../shared/hooks/profiles";
import { useNavigationBlocker } from "../../shared/hooks/navigationBlocker";
import { GenerateFormValues } from "./interfaces";
import {
	getDefaultFormValues,
	getGenerationRequest,
	MAX_RECORDS,
	validateRecordCount,
} from "./utils/request";
import { downloadPayload, getDownloadFileName } from "./hooks/generate";
import { isRunActive, useGenerationRun } from "./hooks/run";
import { FormSection } from "./components/FormSection";
import { OrgUnitField } from "./components/OrgUnitField";
import { DateRangeField } from "./components/DateRangeField";
import { StageRangesField } from "./components/StageRangesField";
import { OutputField } from "./components/OutputField";
import { RunResults } from "./components/RunResults";
import styles from "./GeneratePage.module.css";

function GenerateFormFields({ onCancel }: { onCancel: () => void }) {
	const program = useCurrentProgram();

	return (
		<>
			<FormSection
				title={i18n.t("Where")}
				description={i18n.t("Choose where the records are registered.")}
			>
				<OrgUnitField />
			</FormSection>
			<FormSection
				title={i18n.t("When")}
				description={
					program.registration
						? i18n.t(
								"Enrollment dates are picked at random in this range. Events happen after their enrollment.",
							)
						: i18n.t("Event dates are picked at random in this range.")
				}
			>
				<DateRangeField
					name="range"
					label={
						program.registration
							? i18n.t("Enrollment dates")
							: i18n.t("Event dates")
					}
				/>
				{program.registration && (
					<StageRangesField stages={program.programStages ?? []} />
				)}
			</FormSection>
			<FormSection title={i18n.t("How many")}>
				<div className={styles.count}>
					<RHFTextInputField
						required
						type="number"
						min="1"
						max={String(MAX_RECORDS)}
						step="1"
						name="count"
						label={
							program.registration
								? i18n.t("Number of tracked entities")
								: i18n.t("Number of events")
						}
						helpText={i18n.t("From 1 to {{max}}", { max: MAX_RECORDS })}
						validations={{ validate: validateRecordCount }}
					/>
				</div>
			</FormSection>
			<FormSection title={i18n.t("Output")}>
				<OutputField />
			</FormSection>
			<ButtonStrip>
				<Button primary type="submit">
					{i18n.t("Generate data")}
				</Button>
				<Button secondary onClick={onCancel}>
					{i18n.t("Cancel")}
				</Button>
			</ButtonStrip>
		</>
	);
}

/*
 * The form and the results of a run share this component, so "Generate again" returns to the
 * values that were used.
 */
function GenerateWorkflow({ profile }: { profile: Profile }) {
	const program = useCurrentProgram();
	const navigate = useNavigate();
	const programPath = `/programs/${program.id}`;
	const form = useForm<GenerateFormValues>({
		defaultValues: getDefaultFormValues(program),
		shouldFocusError: false,
	});
	const { submitCount, errors } = form.formState;
	const hasErrors = Object.keys(errors).length > 0;
	const { run, start, stop, reset } = useGenerationRun(profile);
	const { isBlocked, proceed, cancel } = useNavigationBlocker(
		isRunActive(run),
	);

	if (run) {
		return (
			<>
				<RunResults
					run={run}
					onStop={stop}
					onDownload={() =>
						run.payload &&
						downloadPayload(run.payload, getDownloadFileName(profile.name))
					}
					onGenerateAgain={reset}
					onDone={() => navigate(programPath)}
				/>
				{isBlocked && (
					<ConfirmLeaveModal
						title={i18n.t("Stop generating data?")}
						message={i18n.t(
							"Leaving this page stops the upload after the current batch. Records that were already uploaded stay in DHIS2.",
						)}
						leaveLabel={i18n.t("Stop and leave")}
						onStay={cancel}
						onLeave={() => {
							stop();
							proceed();
						}}
					/>
				)}
			</>
		);
	}

	return (
		<FormProvider {...form}>
			<form
				noValidate
				className={styles.form}
				onSubmit={form.handleSubmit((values) =>
					start(getGenerationRequest(values)),
				)}
			>
				{submitCount > 0 && hasErrors && (
					<NoticeBox error title={i18n.t("Some settings need attention")}>
						{i18n.t("Fix the highlighted fields and try again.")}
					</NoticeBox>
				)}
				<GenerateFormFields onCancel={() => navigate(programPath)} />
			</form>
		</FormProvider>
	);
}

export function GeneratePage() {
	const program = useCurrentProgram();
	const { profileId } = useParams();
	const { getProfile } = useProfiles();
	const profile = getProfile(profileId);
	const programPath = `/programs/${program.id}`;

	if (!profile) {
		return (
			<Page
				width="narrow"
				title={i18n.t("Profile not found")}
				breadcrumbs={[
					{ label: program.displayName, to: programPath },
					{ label: i18n.t("Profile not found") },
				]}
			>
				<NoticeBox warning title={i18n.t("This profile doesn't exist")}>
					{i18n.t("It may have been deleted.")}{" "}
					<Link to={programPath}>
						{i18n.t("Back to {{program}}", {
							program: program.displayName,
							interpolation: NO_ESCAPE,
						})}
					</Link>
				</NoticeBox>
			</Page>
		);
	}

	return (
		<Page
			width="narrow"
			title={i18n.t("Generate data")}
			description={i18n.t("Using the profile {{name}}", {
				name: profile.name,
				interpolation: NO_ESCAPE,
			})}
			breadcrumbs={[
				{ label: program.displayName, to: programPath },
				{ label: profile.name, to: `${programPath}/profiles/${profile.id}` },
				{ label: i18n.t("Generate data") },
			]}
		>
			<GenerateWorkflow profile={profile} />
		</Page>
	);
}

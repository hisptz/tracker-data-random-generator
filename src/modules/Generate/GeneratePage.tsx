import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { Button, ButtonStrip, NoticeBox } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { RHFTextInputField } from "@hisptz/dhis2-ui";
import { useCurrentProgram } from "../../shared/components/ProgramProvider/ProgramProvider";
import { Page } from "../../shared/components/Page/Page";
import { Profile, useProfiles } from "../../shared/hooks/profiles";
import { GenerateFormValues } from "./interfaces";
import {
	getDefaultFormValues,
	getGenerationRequest,
	MAX_RECORDS,
	validateRecordCount,
} from "./utils/request";
import { downloadPayload, useGeneratePayload } from "./hooks/generate";
import { useUploadData } from "./hooks/upload";
import { FormSection } from "./components/FormSection";
import { OrgUnitField } from "./components/OrgUnitField";
import { DateRangeField } from "./components/DateRangeField";
import { StageRangesField } from "./components/StageRangesField";
import { OutputField } from "./components/OutputField";
import styles from "./GeneratePage.module.css";

export function getDownloadFileName(profileName: string): string {
	const safeName = profileName.replace(/[^a-z0-9-_]+/gi, "-").replace(/^-+|-+$/g, "");
	return `${safeName || "data"}-${new Date().toISOString().slice(0, 10)}.json`;
}

function GenerateForm({ profile }: { profile: Profile }) {
	const program = useCurrentProgram();
	const navigate = useNavigate();
	const programPath = `/programs/${program.id}`;
	const form = useForm<GenerateFormValues>({
		defaultValues: getDefaultFormValues(program),
		shouldFocusError: false,
	});
	const generatePayload = useGeneratePayload(profile);
	const { uploadData } = useUploadData();
	const [error, setError] = useState<string | null>(null);
	const { isSubmitting, submitCount, errors } = form.formState;
	const hasErrors = Object.keys(errors).length > 0;

	const onSubmit = async (values: GenerateFormValues) => {
		setError(null);
		try {
			const request = getGenerationRequest(values);
			const payload = await generatePayload(request);
			if (request.output === "download") {
				downloadPayload(payload, getDownloadFileName(profile.name));
			} else {
				await uploadData(payload, { skipRuleEngine: request.skipRuleEngine });
			}
			navigate(programPath);
		} catch (e) {
			setError(e instanceof Error ? e.message : String(e));
		}
	};

	return (
		<FormProvider {...form}>
			<form
				noValidate
				className={styles.form}
				onSubmit={form.handleSubmit(onSubmit)}
			>
				{submitCount > 0 && hasErrors && (
					<NoticeBox error title={i18n.t("Some settings need attention")}>
						{i18n.t("Fix the highlighted fields and try again.")}
					</NoticeBox>
				)}
				{error && (
					<NoticeBox error title={i18n.t("Data could not be generated")}>
						{error}
					</NoticeBox>
				)}
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
					<Button
						primary
						type="submit"
						loading={isSubmitting}
						disabled={isSubmitting}
					>
						{isSubmitting ? i18n.t("Generating...") : i18n.t("Generate data")}
					</Button>
					<Button
						secondary
						disabled={isSubmitting}
						onClick={() => navigate(programPath)}
					>
						{i18n.t("Cancel")}
					</Button>
				</ButtonStrip>
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
						{i18n.t("Back to {{program}}", { program: program.displayName })}
					</Link>
				</NoticeBox>
			</Page>
		);
	}

	return (
		<Page
			width="narrow"
			title={i18n.t("Generate data")}
			description={i18n.t("Using the profile {{name}}", { name: profile.name })}
			breadcrumbs={[
				{ label: program.displayName, to: programPath },
				{ label: profile.name, to: `${programPath}/profiles/${profile.id}` },
				{ label: i18n.t("Generate data") },
			]}
		>
			<GenerateForm profile={profile} />
		</Page>
	);
}

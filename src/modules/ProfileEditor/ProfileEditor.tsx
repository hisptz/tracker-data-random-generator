import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import { Button, ButtonStrip, NoticeBox } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { uid } from "@hisptz/dhis2-utils";
import { get } from "lodash";
import { useCurrentProgram } from "../../shared/components/ProgramProvider/ProgramProvider";
import { Page } from "../../shared/components/Page/Page";
import { ConfirmLeaveModal } from "../../shared/components/ConfirmLeaveModal/ConfirmLeaveModal";
import { Profile, useProfiles } from "../../shared/hooks/profiles";
import { useNavigationBlocker } from "../../shared/hooks/navigationBlocker";
import {
	GENERAL_SECTION_KEY,
	getProfileFormValues,
	getProfileSections,
	ProfileFormValues,
} from "./utils/sections";
import { countErrors } from "./utils/status";
import { getSuggestedConfig } from "./utils/suggestions";
import { SectionNav } from "./components/SectionNav";
import { FieldsPanel, GeneralPanel } from "./components/SectionPanel";
import styles from "./ProfileEditor.module.css";

function ProfileForm({ profile }: { profile?: Profile }) {
	const program = useCurrentProgram();
	const navigate = useNavigate();
	const { saveProfile } = useProfiles();
	const programPath = `/programs/${program.id}`;
	const sections = useMemo(() => getProfileSections(program), [program]);
	// Computed once, so saving or other datastore updates never reset the form.
	// Only new profiles get suggested generators; saved profiles load exactly as saved.
	const [defaultValues] = useState(() =>
		getProfileFormValues(
			program,
			profile,
			profile ? undefined : getSuggestedConfig,
		),
	);
	const form = useForm<ProfileFormValues>({
		defaultValues,
		shouldFocusError: false,
	});
	const { isDirty, isSubmitting, errors, submitCount } = form.formState;
	const [activeKey, setActiveKey] = useState(GENERAL_SECTION_KEY);
	const [saveError, setSaveError] = useState<string | null>(null);
	const [saved, setSaved] = useState(false);
	const { isBlocked, proceed, cancel } = useNavigationBlocker(
		isDirty && !saved,
	);

	// Navigate only after the render that turns the blocker off
	useEffect(() => {
		if (saved) {
			navigate(programPath);
		}
	}, [saved, navigate, programPath]);

	const sectionsWithErrors = [
		{ key: GENERAL_SECTION_KEY, label: i18n.t("General"), path: "name" },
		...sections,
	].filter(({ path }) => countErrors(get(errors, path)) > 0);
	const errorCount = countErrors(errors);
	const firstSectionWithErrors = sectionsWithErrors[0];

	const onSubmit = async (values: ProfileFormValues) => {
		setSaveError(null);
		try {
			await saveProfile({
				...values,
				id: profile?.id ?? uid(),
				name: values.name.trim(),
			} as Profile);
			setSaved(true);
		} catch (e) {
			setSaveError(e instanceof Error ? e.message : String(e));
		}
	};

	const onInvalid = () => {
		setSaveError(null);
		// Show the first section with problems, unless the current one has some too
		const invalidKeys = [
			{ key: GENERAL_SECTION_KEY, path: "name" },
			...sections,
		]
			.filter(({ path }) => countErrors(get(form.formState.errors, path)) > 0)
			.map(({ key }) => key);
		if (invalidKeys.length > 0 && !invalidKeys.includes(activeKey)) {
			setActiveKey(invalidKeys[0]);
		}
	};

	const title = profile ? profile.name : i18n.t("New profile");

	return (
		<FormProvider {...form}>
			<form
				noValidate
				className={styles.form}
				onSubmit={form.handleSubmit(onSubmit, onInvalid)}
			>
				<Page
					width="wide"
					title={title}
					breadcrumbs={[
						{ label: program.displayName, to: programPath },
						{ label: title },
					]}
				>
					{submitCount > 0 && errorCount > 0 && (
						<NoticeBox
							error
							title={i18n.t("The profile can't be saved yet")}
						>
							<div className={styles.notice}>
								<span>
									{i18n.t(
										"Fields that need attention: {{total}}. Fix them and save again.",
										{ total: errorCount },
									)}
								</span>
								{firstSectionWithErrors &&
									firstSectionWithErrors.key !== activeKey && (
										<Button
											small
											onClick={() => setActiveKey(firstSectionWithErrors.key)}
										>
											{i18n.t("Go to {{section}}", {
												section: firstSectionWithErrors.label,
											})}
										</Button>
									)}
							</div>
						</NoticeBox>
					)}
					{saveError && (
						<NoticeBox error title={i18n.t("The profile could not be saved")}>
							{saveError}
						</NoticeBox>
					)}
					<div className={styles.body}>
						<SectionNav
							sections={sections}
							activeKey={activeKey}
							onChange={setActiveKey}
						/>
						<div className={styles.content}>
							{/* Every section stays mounted so its fields are validated when hidden */}
							<div hidden={activeKey !== GENERAL_SECTION_KEY}>
								<GeneralPanel />
							</div>
							{sections.map((section) => (
								<div key={section.key} hidden={activeKey !== section.key}>
									<FieldsPanel section={section} showSuggestions={!profile} />
								</div>
							))}
						</div>
					</div>
				</Page>
				<div className={styles.footer}>
					<ButtonStrip>
						<Button
							primary
							type="submit"
							loading={isSubmitting}
							disabled={isSubmitting || saved}
						>
							{isSubmitting ? i18n.t("Saving...") : i18n.t("Save profile")}
						</Button>
						<Button
							secondary
							disabled={isSubmitting}
							onClick={() => navigate(programPath)}
						>
							{i18n.t("Cancel")}
						</Button>
					</ButtonStrip>
				</div>
			</form>
			{isBlocked && (
				<ConfirmLeaveModal
					title={i18n.t("Discard unsaved changes?")}
					message={i18n.t(
						"You have changes to this profile that haven't been saved. If you leave now, they will be lost.",
					)}
					leaveLabel={i18n.t("Discard changes")}
					onStay={cancel}
					onLeave={proceed}
				/>
			)}
		</FormProvider>
	);
}

export function ProfileEditor() {
	const program = useCurrentProgram();
	const { profileId } = useParams();
	const { getProfile } = useProfiles();
	const profile = getProfile(profileId);

	if (profileId && !profile) {
		return (
			<Page
				width="narrow"
				title={i18n.t("Profile not found")}
				breadcrumbs={[
					{ label: program.displayName, to: `/programs/${program.id}` },
					{ label: i18n.t("Profile not found") },
				]}
			>
				<NoticeBox warning title={i18n.t("This profile doesn't exist")}>
					{i18n.t("It may have been deleted.")}{" "}
					<Link to={`/programs/${program.id}`}>
						{i18n.t("Back to {{program}}", { program: program.displayName })}
					</Link>
				</NoticeBox>
			</Page>
		);
	}

	// Keyed so that moving between profiles starts a fresh form
	return <ProfileForm key={profileId ?? "new"} profile={profile} />;
}

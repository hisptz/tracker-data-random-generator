import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconAdd16, NoticeBox, Tag } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { useCurrentProgram } from "../../shared/components/ProgramProvider/ProgramProvider";
import { Page } from "../../shared/components/Page/Page";
import { EmptyState } from "../../shared/components/EmptyState/EmptyState";
import { useProfiles } from "../../shared/hooks/profiles";
import { ProgramMetadata } from "../../shared/interfaces/program";
import { ProfileTable } from "./components/ProfileTable/ProfileTable";

/*
 * Label style ("Stages (3)") avoids plural forms, which the installed i18next version can't default.
 * Values are computed before i18n.t because the string extractor can't parse optional chaining.
 */
function getProgramSummary(program: ProgramMetadata): string {
	if (!program.registration) {
		const dataElements =
			program.programStages?.[0]?.programStageDataElements?.length ?? 0;
		return i18n.t("Data elements ({{total}})", { total: dataElements });
	}
	const stageCount = program.programStages?.length ?? 0;
	const attributeCount = program.programTrackedEntityAttributes?.length ?? 0;
	const stages = i18n.t("Stages ({{total}})", { total: stageCount });
	const attributes = i18n.t("Attributes ({{total}})", {
		total: attributeCount,
	});
	return `${stages} · ${attributes}`;
}

export function ProgramDataProfiles() {
	const program = useCurrentProgram();
	const navigate = useNavigate();
	const { profiles, deleteProfile, duplicateProfile } = useProfiles();
	const [actionError, setActionError] = useState<string | null>(null);
	const hasProfiles = profiles.length > 0;

	const onDuplicate = async (profileId: string) => {
		setActionError(null);
		try {
			await duplicateProfile(profileId);
		} catch (e) {
			setActionError(e instanceof Error ? e.message : String(e));
		}
	};

	return (
		<Page
			title={program.displayName}
			description={
				<>
					<Tag neutral>
						{program.registration
							? i18n.t("Tracker program")
							: i18n.t("Event program")}
					</Tag>
					<span>{getProgramSummary(program)}</span>
				</>
			}
			actions={
				hasProfiles && (
					<Button
						primary
						icon={<IconAdd16 />}
						onClick={() => navigate("profiles/new")}
					>
						{i18n.t("New profile")}
					</Button>
				)
			}
		>
			{actionError && (
				<NoticeBox error title={i18n.t("The profile could not be duplicated")}>
					{actionError}
				</NoticeBox>
			)}
			{hasProfiles ? (
				<ProfileTable
					profiles={profiles}
					onGenerate={(id) => navigate(`profiles/${id}/generate`)}
					onEdit={(id) => navigate(`profiles/${id}`)}
					onDuplicate={onDuplicate}
					onDelete={deleteProfile}
				/>
			) : (
				<EmptyState
					title={i18n.t("No profiles yet")}
					description={i18n.t(
						"A profile describes how fake values are generated for each field in this program. Create one to start generating test data.",
					)}
					action={
						<Button primary onClick={() => navigate("profiles/new")}>
							{i18n.t("Create first profile")}
						</Button>
					}
				/>
			)}
		</Page>
	);
}

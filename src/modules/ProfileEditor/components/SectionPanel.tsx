import React, { ReactNode } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { RHFTextInputField } from "@hisptz/dhis2-ui";
import { ProfileSection } from "../utils/sections";
import { getSupportedGenerators } from "../utils/generators";
import { FieldRow } from "./FieldRow";
import styles from "./SectionPanel.module.css";

const MAX_EVENTS_PER_ENROLLMENT = 10;

function validateEventCount(value?: string | number) {
	if (value === undefined || value === null || value === "") {
		return true;
	}
	const count = Number(value);
	return (
		(Number.isInteger(count) &&
			count >= 0 &&
			count <= MAX_EVENTS_PER_ENROLLMENT) ||
		i18n.t("Enter a whole number from 0 to {{max}}", {
			max: MAX_EVENTS_PER_ENROLLMENT,
		})
	);
}

export function PanelHeader({
	title,
	description,
	actions,
}: {
	title: string;
	description?: string;
	actions?: ReactNode;
}) {
	return (
		<div className={styles.header}>
			<div className={styles.heading}>
				<h2 className={styles.title}>{title}</h2>
				{description && <p className={styles.description}>{description}</p>}
			</div>
			{actions && <div className={styles.actions}>{actions}</div>}
		</div>
	);
}

export function GeneralPanel() {
	return (
		<section className={styles.panel}>
			<PanelHeader
				title={i18n.t("General")}
				description={i18n.t(
					"Give the profile a name that describes the data it creates.",
				)}
			/>
			<div className={styles.body}>
				<div className={styles.nameField}>
					<RHFTextInputField
						required
						name="name"
						type="text"
						label={i18n.t("Profile name")}
						placeholder={i18n.t("For example: Malaria cases, 2024")}
						validations={{
							validate: (value?: string) =>
								!!value?.trim() || i18n.t("Enter a name for the profile"),
						}}
					/>
				</div>
			</div>
		</section>
	);
}

function ClearAllButton({ section }: { section: ProfileSection }) {
	const { setValue } = useFormContext();

	// Fields with a single possible generator keep it, since nothing else could be chosen
	const onClear = () => {
		for (const { dataItem, path } of section.fields) {
			if (getSupportedGenerators(dataItem).length !== 1) {
				setValue(`${path}.dataTypeName`, "", { shouldDirty: true });
			}
			setValue(`${path}.options`, undefined, { shouldDirty: true });
		}
	};

	return (
		<Button small secondary onClick={onClear}>
			{i18n.t("Clear all")}
		</Button>
	);
}

export function FieldsPanel({
	section,
	showSuggestions,
}: {
	section: ProfileSection;
	// Marks generators that were suggested for a new profile and not changed yet
	showSuggestions?: boolean;
}) {
	return (
		<section className={styles.panel}>
			<PanelHeader
				title={section.label}
				description={i18n.t(
					"Choose a generator for each field. Fields without a generator are left empty.",
				)}
				actions={
					section.fields.length > 0 && <ClearAllButton section={section} />
				}
			/>
			{section.stage?.repeatable && (
				<div className={styles.stageSettings}>
					<RHFTextInputField
						dense
						type="number"
						min="0"
						max={String(MAX_EVENTS_PER_ENROLLMENT)}
						step="1"
						name={`${section.stage.path}.count`}
						label={i18n.t("Events per enrollment")}
						helpText={i18n.t(
							"This stage is repeatable. Leave empty to create 1 event.",
						)}
						validations={{ validate: validateEventCount }}
					/>
				</div>
			)}
			<div className={styles.fields}>
				{section.fields.length === 0 ? (
					<p className={styles.empty}>
						{i18n.t("This section has no fields to configure.")}
					</p>
				) : (
					section.fields.map((field) => (
						<FieldRow
							key={field.path}
							field={field}
							showSuggestion={showSuggestions}
						/>
					))
				)}
			</div>
		</section>
	);
}

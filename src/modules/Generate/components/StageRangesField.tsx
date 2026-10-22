import React, { useEffect, useState } from "react";
import { Controller, useFormState, useWatch } from "react-hook-form";
import { Button, Checkbox, IconChevronDown16, IconChevronUp16 } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { ProgramStage } from "@hisptz/dhis2-utils";
import { CustomDateRange } from "./DateRangeField";
import styles from "./StageRangesField.module.css";

function StageRange({ stage }: { stage: ProgramStage }) {
	const name = `stageRanges.${stage.id}`;
	const custom = useWatch({ name: `${name}.custom` }) as boolean | undefined;
	const label = stage.displayName ?? stage.name ?? stage.id;

	return (
		<div className={styles.stage}>
			<Controller
				name={`${name}.custom`}
				render={({ field }) => (
					<Checkbox
						dense
						label={i18n.t("Use custom dates for {{stage}}", { stage: label })}
						checked={!!field.value}
						onChange={({ checked }) => field.onChange(checked)}
					/>
				)}
			/>
			{custom ? (
				<CustomDateRange name={name} />
			) : (
				<p className={styles.hint}>
					{i18n.t("Events are dated between the enrollment date and today.")}
				</p>
			)}
		</div>
	);
}

/*
 * Optional date ranges for each stage's events. Hidden by default, since most runs use the defaults.
 */
export function StageRangesField({ stages }: { stages: ProgramStage[] }) {
	const ranges = useWatch({ name: "stageRanges" }) as
		| Record<string, { custom?: boolean }>
		| undefined;
	const customCount = Object.values(ranges ?? {}).filter((range) => range?.custom).length;
	const [open, setOpen] = useState(customCount > 0);
	const { errors, submitCount } = useFormState({ name: "stageRanges" });
	const hasErrors = !!errors.stageRanges;

	// Open the list after a submit that found problems in it, so they can be seen
	useEffect(() => {
		if (hasErrors) {
			setOpen(true);
		}
	}, [submitCount, hasErrors]);

	if (stages.length === 0) {
		return null;
	}

	return (
		<div className={styles.container}>
			<div className={styles.toggleRow}>
				<Button
					small
					secondary
					icon={open ? <IconChevronUp16 /> : <IconChevronDown16 />}
					onClick={() => setOpen((current) => !current)}
				>
					{i18n.t("Customise dates per stage")}
				</Button>
				{!open && customCount > 0 && (
					<span className={styles.count}>
						{i18n.t("Some stages use custom dates")}
					</span>
				)}
			</div>
			{/* Hidden rather than unmounted, so custom dates are still validated when collapsed */}
			<div className={styles.stages} hidden={!open}>
				{stages.map((stage) => (
					<StageRange key={stage.id} stage={stage} />
				))}
			</div>
		</div>
	);
}

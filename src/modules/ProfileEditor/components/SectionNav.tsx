import React, { useMemo } from "react";
import { useFormState, useWatch } from "react-hook-form";
import {
	IconCheckmarkCircle16,
	IconErrorFilled16,
	SingleSelectField,
	SingleSelectOption,
} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import cx from "classnames";
import { GENERAL_SECTION_KEY, ProfileFormValues, ProfileSection } from "../utils/sections";
import { getStatuses, SectionStatus } from "../utils/status";
import styles from "./SectionNav.module.css";

export interface SectionNavProps {
	sections: ProfileSection[];
	activeKey: string;
	onChange: (key: string) => void;
}

function getStatusText(status: SectionStatus, submitted: boolean): string {
	if (status.errors > 0) {
		return i18n.t("Needs attention: {{total}}", { total: status.errors });
	}
	if (submitted && status.requiredMissing > 0) {
		return i18n.t("Required missing: {{total}}", {
			total: status.requiredMissing,
		});
	}
	return i18n.t("{{configured}} of {{total}} configured", {
		configured: status.configured,
		total: status.total,
	});
}

function StatusIcon({ status }: { status: SectionStatus }) {
	if (status.errors > 0) {
		return (
			<span className={styles.errorIcon}>
				<IconErrorFilled16 />
			</span>
		);
	}
	if (status.requiredMissing === 0) {
		return (
			<span className={styles.completeIcon}>
				<IconCheckmarkCircle16 />
			</span>
		);
	}
	return null;
}

/*
 * Lists the editor's sections with their progress. Below 768px it becomes a select above the content.
 */
export function SectionNav({ sections, activeKey, onChange }: SectionNavProps) {
	const values = useWatch() as Partial<ProfileFormValues>;
	const { errors, isSubmitted } = useFormState();
	// Not memoised: react-hook-form updates the errors object in place
	const statuses = getStatuses(sections, values, errors);
	const items = useMemo(
		() => [
			{ key: GENERAL_SECTION_KEY, label: i18n.t("General") },
			...sections.map(({ key, label }) => ({ key, label })),
		],
		[sections],
	);

	return (
		<>
			<nav className={styles.nav} aria-label={i18n.t("Profile sections")}>
				<ul className={styles.list}>
					{items.map(({ key, label }) => {
						const status = statuses[key];
						const hasErrors = status.errors > 0;
						return (
							<li key={key}>
								<button
									type="button"
									className={cx(styles.item, {
										[styles.active]: key === activeKey,
									})}
									aria-current={key === activeKey ? "step" : undefined}
									onClick={() => onChange(key)}
								>
									<span className={styles.itemLabel}>
										<span className={styles.itemName}>{label}</span>
										<StatusIcon status={status} />
									</span>
									<span
										className={cx(styles.itemStatus, {
											[styles.itemStatusError]:
												hasErrors ||
												(isSubmitted && status.requiredMissing > 0),
										})}
									>
										{getStatusText(status, isSubmitted)}
									</span>
								</button>
							</li>
						);
					})}
				</ul>
			</nav>
			<div className={styles.select}>
				<SingleSelectField
					dense
					label={i18n.t("Section")}
					selected={activeKey}
					onChange={({ selected }: { selected: string }) =>
						onChange(selected)
					}
				>
					{items.map(({ key, label }) => (
						<SingleSelectOption
							key={key}
							value={key}
							label={`${label} · ${getStatusText(statuses[key], isSubmitted)}`}
						/>
					))}
				</SingleSelectField>
			</div>
		</>
	);
}

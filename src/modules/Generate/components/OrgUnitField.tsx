import React, { useMemo, useState } from "react";
import { Controller } from "react-hook-form";
import { useQueryClient } from "react-query";
import { Button, Field, OrganisationUnitTree } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import cx from "classnames";
import { useCurrentProgram } from "../../../shared/components/ProgramProvider/ProgramProvider";
import { getOrgUnitTreeConfig } from "../utils/orgUnits";
import styles from "./OrgUnitField.module.css";

const sessionCache = { staleTime: Infinity, cacheTime: Infinity };

/*
 * OrganisationUnitTree loads every node through useDataQuery, which shares the app's react-query client.
 * Org units don't change while the app is open, so keep those queries for the whole session instead
 * of refetching them each time a node mounts. Keys are matched partially, so this covers the node and
 * children queries ({ orgUnit: ... }) and the root query of each root ({ [rootId]: ... }).
 */
function useCachedOrgUnitQueries(roots: string[]) {
	const queryClient = useQueryClient();
	// A lazy initial state runs once, during the first render, so the defaults exist before the tree queries
	useState(() => {
		queryClient.setQueryDefaults(
			[{ orgUnit: { resource: "organisationUnits" } }],
			sessionCache,
		);
		for (const root of roots) {
			queryClient.setQueryDefaults(
				[{ [root]: { resource: "organisationUnits" } }],
				sessionCache,
			);
		}
		return true;
	});
}

export function OrgUnitField() {
	const program = useCurrentProgram();
	const config = useMemo(
		() => getOrgUnitTreeConfig(program.organisationUnits),
		[program],
	);
	const assignedIds = useMemo(() => Object.keys(config.pathById), [config]);
	const filter = useMemo(() => Object.values(config.pathById), [config]);
	useCachedOrgUnitQueries(config.roots);

	if (assignedIds.length === 0) {
		return (
			<p className={styles.empty}>
				{i18n.t(
					"This program isn't assigned to any organisation units. Assign it in the Maintenance app before generating data.",
				)}
			</p>
		);
	}

	return (
		<Controller
			name="orgUnits"
			rules={{
				validate: (value?: string[]) =>
					(value?.length ?? 0) > 0 ||
					i18n.t("Select at least one organisation unit"),
			}}
			render={({ field, fieldState }) => {
				const selectedIds: string[] = field.value ?? [];
				const selectedPaths = selectedIds
					.map((id) => config.pathById[id])
					.filter(Boolean);

				return (
					<Field
						required
						label={i18n.t("Organisation units")}
						helpText={i18n.t(
							"Only units the program is assigned to can be selected. Records are spread across the selected units at random.",
						)}
						error={!!fieldState.error}
						validationText={fieldState.error?.message}
					>
						<div className={styles.toolbar}>
							<span className={styles.count}>
								{i18n.t("{{selected}} of {{total}} selected", {
									selected: selectedIds.length,
									total: assignedIds.length,
								})}
							</span>
							<div className={styles.actions}>
								<Button
									small
									secondary
									disabled={selectedIds.length === assignedIds.length}
									onClick={() => field.onChange(assignedIds)}
								>
									{i18n.t("Select all assigned")}
								</Button>
								<Button
									small
									secondary
									disabled={selectedIds.length === 0}
									onClick={() => field.onChange([])}
								>
									{i18n.t("Clear")}
								</Button>
							</div>
						</div>
						<div
							className={cx(styles.tree, {
								[styles.treeError]: !!fieldState.error,
							})}
						>
							<OrganisationUnitTree
								roots={config.roots}
								filter={filter}
								initiallyExpanded={config.initiallyExpanded}
								selected={selectedPaths}
								renderNodeLabel={({ node, label }) =>
									config.idByPath[node.path] ? (
										label
									) : (
										<span className={styles.unassigned}>{label}</span>
									)
								}
								onChange={({ path, checked }) => {
									const id = config.idByPath[path];
									// Ancestors are shown to reach assigned units, but can't be selected
									if (!id) {
										return;
									}
									field.onChange(
										checked
											? [...selectedIds.filter((selected) => selected !== id), id]
											: selectedIds.filter((selected) => selected !== id),
									);
									field.onBlur();
								}}
							/>
						</div>
					</Field>
				);
			}}
		/>
	);
}

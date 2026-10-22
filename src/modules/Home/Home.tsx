import React from "react";
import i18n from "@dhis2/d2-i18n";
import { EmptyState } from "../../shared/components/EmptyState/EmptyState";

export function Home() {
	return (
		<EmptyState
			title={i18n.t("Select a program to get started")}
			description={i18n.t(
				"Choose a program from the list to see its profiles. A profile describes how fake values are generated for each field, so you can create test data in a few clicks.",
			)}
		/>
	);
}

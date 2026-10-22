import React from "react";
import { useCurrentProgram } from "../../shared/components/ProgramProvider/ProgramProvider";
import { DataProfiles } from "./components/DataProfiles";
import { Page } from "../../shared/components/Page/Page";

export function ProgramDataProfiles() {
	const program = useCurrentProgram();

	return (
		<Page title={program.displayName}>
			<DataProfiles />
		</Page>
	);
}

import React from "react";
import { useCurrentProgram } from "../../shared/components/ProgramProvider/ProgramProvider";
import { useParams } from "react-router-dom";
import { TrackerProgramConfig } from "./components/TrackerProgramConfig";
import { EventProgramConfig } from "./components/EventProgramConfig";

export function DataProfileConfig() {
	const { id: programId } = useParams();
	const program = useCurrentProgram();

	if (!program) {
		return null;
	}

	if (program.registration) {
		return <TrackerProgramConfig />;
	}

	return <EventProgramConfig />;
}

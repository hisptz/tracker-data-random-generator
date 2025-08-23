import React from "react";
import { useRecoilValue } from "recoil";
import { ProgramState } from "../ProgramDataProfiles/state/program";
import { useParams } from "react-router-dom";
import { TrackerProgramConfig } from "./components/TrackerProgramConfig";
import { EventProgramConfig } from "./components/EventProgramConfig";

export function DataProfileConfig() {
	const { id: programId } = useParams();
	const program = useRecoilValue(ProgramState(programId));

	if (!program) {
		return null;
	}

	if (program.registration) {
		return <TrackerProgramConfig />;
	}

	return <EventProgramConfig />;
}

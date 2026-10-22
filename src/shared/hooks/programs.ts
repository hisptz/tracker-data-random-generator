import { useDataEngine } from "@dhis2/app-runtime";
import { useQuery } from "react-query";
import {
	ProgramMetadata,
	ProgramSummary,
} from "../interfaces/program";

// Program metadata does not change while the app is open, so it is fetched once per session
const metadataCacheOptions = {
	staleTime: Infinity,
	cacheTime: Infinity,
};

const programsQuery = {
	programs: {
		resource: "programs",
		params: {
			paging: false,
			order: "displayName:asc",
			fields: ["id", "displayName", "registration"],
		},
	},
};

const programQuery = {
	program: {
		resource: "programs",
		id: ({ id }: Record<string, string>) => id,
		params: {
			fields: [
				"id",
				"displayName",
				"registration",
				"trackedEntityType[id]",
				"programTrackedEntityAttributes[mandatory,trackedEntityAttribute[formName,generated,name,id,valueType,optionSet[options[id,code,name]]]]",
				"programStages[id,displayName,repeatable,programStageDataElements[compulsory,dataElement[formName,name,id,valueType,optionSet[options[id,code,name]]]]]",
				"organisationUnits[id,name,displayName,code,path]",
			],
		},
	},
};

export function usePrograms() {
	const engine = useDataEngine();
	return useQuery(
		["programs"],
		async () => {
			const data = (await engine.query(programsQuery)) as unknown as {
				programs: { programs: ProgramSummary[] };
			};
			return data.programs.programs;
		},
		metadataCacheOptions,
	);
}

export function useProgram(id?: string) {
	const engine = useDataEngine();
	return useQuery(
		["program", id],
		async () => {
			const data = (await engine.query(programQuery, {
				variables: { id },
			})) as unknown as { program: ProgramMetadata };
			return data.program;
		},
		{ ...metadataCacheOptions, enabled: !!id },
	);
}

import { selectorFamily } from "recoil";
import { DataEngineState } from "../../../shared/state/engine";
import { Program } from "@hisptz/dhis2-utils";

const programQuery: any = {
	program: {
		resource: "programs",
		id: ({ id }: { id: string }) => id,
		params: {
			fields: [
				"id",
				"displayName",
				"registration",
				"trackedEntityType[id]",
				"programTrackedEntityAttributes[mandatory,trackedEntityAttribute[formName,generated,name,id,valueType,optionSet[options[id,code,name]]]]",
				"programStages[id,displayName,programStageDataElements[compulsory,dataElement[formName,name,id,valueType,optionSet[options[id,code,name]]]]]",
				"organisationUnits[id,name,code]",
			],
		},
	},
};

export const ProgramState = selectorFamily<
	Program | undefined,
	string | undefined
>({
	key: "program-state",
	get:
		(id?: string) =>
		async ({ get }) => {
			const engine = get(DataEngineState);
			if (!engine || !id) {
				return;
			}
			const programData: { program: Program } = (await engine.query(
				programQuery,
				{
					variables: {
						id,
					},
				},
			)) as { program: Program };
			return programData?.program;
		},
});

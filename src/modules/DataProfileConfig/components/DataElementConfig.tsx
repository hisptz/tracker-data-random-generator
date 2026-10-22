import { useParams } from "react-router-dom";
import { useCurrentProgram } from "../../../shared/components/ProgramProvider/ProgramProvider";
import React, { useMemo } from "react";
import { DataItemConfigField } from "./DataItemConfigField";
import { head } from "lodash";

export function DataElementConfig() {
	const { id: programId } = useParams();
	const program = useCurrentProgram();

	const stage = head(program?.programStages);
	const dataElements = useMemo(
		() =>
			stage?.programStageDataElements?.map(
				({ dataElement, compulsory }) => ({
					...dataElement,
					compulsory,
				}),
			),
		[program],
	);

	return (
		<div className="column gap-16">
			{dataElements?.map((tea, fieldIndex: number) => (
				<DataItemConfigField
					required={tea.compulsory}
					key={`${tea.id}-config`}
					name={`dataElements.${fieldIndex}`}
					dataItem={tea}
				/>
			))}
		</div>
	);
}

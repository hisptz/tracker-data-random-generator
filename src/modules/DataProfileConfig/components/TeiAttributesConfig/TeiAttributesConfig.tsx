import React, { useMemo } from "react";
import { useCurrentProgram } from "../../../../shared/components/ProgramProvider/ProgramProvider";
import { useParams } from "react-router-dom";
import { DataItemConfigField } from "../DataItemConfigField";

export function TeiAttributesConfig() {
	const { id: programId } = useParams();
	const program = useCurrentProgram();
	const trackedEntityAttributes = useMemo(
		() =>
			program?.programTrackedEntityAttributes?.map(
				({ trackedEntityAttribute, mandatory }) => ({
					...trackedEntityAttribute,
					mandatory,
				}),
			),
		[program],
	);

	return (
		<div className="column gap-16">
			{trackedEntityAttributes?.map((tea, fieldIndex: number) => (
				<DataItemConfigField
					required={tea.mandatory}
					key={`${tea.id}-config`}
					name={`attributes.${fieldIndex}`}
					dataItem={tea}
				/>
			))}
		</div>
	);
}

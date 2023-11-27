import React from "react";
import {Field, Button} from "@dhis2/ui"
import i18n from '@dhis2/d2-i18n';
import {useBoolean} from "usehooks-ts";
import {OrgUnitSelectorModal} from "@hisptz/dhis2-ui";
import {Controller} from "react-hook-form";

export interface OrgUnitSelectorProps {
		name: string;
		label: string;
}

export function OrgUnitSelector({name, label}: OrgUnitSelectorProps) {
		const {value: hide, setTrue: onHide, setFalse: onShow} = useBoolean(true);

		return (
				<Controller
						name={name}
						render={({field: {onChange, value}}) => (
								<Field name={name} label={label}>
										<OrgUnitSelectorModal
												onClose={onHide}
												hide={hide}
												onUpdate={
														({orgUnits}) => {
																const selected = orgUnits.map((ou: { id: string; }) => ou.id);
																onChange(selected);
														}
												}/>
										<Button>{i18n.t("Select organisation unit(s)")}</Button>
								</Field>
						)}

				/>
		)
}

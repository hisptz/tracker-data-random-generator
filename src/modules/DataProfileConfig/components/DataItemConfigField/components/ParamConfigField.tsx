import {useWatch} from "react-hook-form";
import {supportedDataTypes} from "../../../../../script/constants/dataTypes";
import {find} from "lodash";
import React from "react"
import {RHFCheckboxField, RHFSingleSelectField, RHFTextInputField} from "@hisptz/dhis2-ui";

export interface ParamConfigFieldProps {
		name: string;
}

export function ParamConfigField({name}: ParamConfigFieldProps) {
		const dataTypeConfig = useWatch({
				name
		})
		const dataTypeName = dataTypeConfig?.dataTypeName;

		if (!dataTypeName) {
				return null;
		}

		const dataType = find(supportedDataTypes, ['name', dataTypeName]);

		if (!dataType?.supportedParams) {
				return null;
		}

		return (
				<div style={{display: "grid", gridTemplateColumns: `repeat(${dataType?.supportedParams.length}, 1fr)`}}
						 className="gap-8 w-100">
						{dataType.supportedParams?.map(({type, fieldProps, options, keys, label}, index) => {
								if (type === "options") {
										return (
												<RHFSingleSelectField
														key={`${label}-field`}
														{...fieldProps}
														clearable
														filterable
														label={label}
														options={options?.map(({name, value}) => ({label: name, value})) ?? []}
														name={`${name}.options.params.${index}`}
												/>
										)
								}

								if (type === "object") {
										return keys?.map(({type, fieldProps, label, key, options}) => (
												options ? <RHFSingleSelectField
																options={options?.map(({name, value}) => ({label: name, value})) ?? []} {...fieldProps}
																type={type} key={`${key}-${label}-field`} label={label}
																name={`${name}.options.params.${index}.${key}`}/> :
														<RHFTextInputField {...fieldProps} type={type} key={`${key}-${label}-field`} label={label}
																							 name={`${name}.options.params.${index}.${key}`}/>
										))
								}

								if (type === "boolean") {
										return <RHFCheckboxField  label={label} name={`${name}.options.requiresOrgUnitCode`}/>
								}

								if (['text', 'number', 'date'].includes(type)) {
										return (
												<RHFTextInputField key={`${label}-field`} {...fieldProps} label={label} type={type}
																					 name={`${name}.options.params.${index}`}/>
										)
								}


						})}
				</div>
		)
}

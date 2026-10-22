import {useWatch} from "react-hook-form";
import {supportedDataTypes} from "../../../../../script/constants/dataTypes";
import {SupportedParam} from "../../../../../script/interfaces";
import {find, get, isNil} from "lodash";
import React from "react"
import {RHFCheckboxField, RHFSingleSelectField, RHFTextInputField} from "@hisptz/dhis2-ui";
import i18n from '@dhis2/d2-i18n';

export interface ParamConfigFieldProps {
		name: string;
}

function isEmptyValue(value: unknown) {
		return isNil(value) || value === "";
}

function compareBounds(type: SupportedParam["type"], value: string, pairValue: string): number {
		if (type === "number") {
				return Number(value) - Number(pairValue);
		}
		// date, time and datetime-local values are ISO formatted, so they order as strings
		return value < pairValue ? -1 : value > pairValue ? 1 : 0;
}

// Validates that a range field is on the right side of its pair. Only compares when both ends are set.
function getRangeValidations({rangeBound, type, label}: SupportedParam, pairPath: string, pairLabel: string) {
		if (!rangeBound) {
				return undefined;
		}
		return {
				deps: [pairPath],
				validate: (value: unknown, formValues: unknown) => {
						const pairValue = get(formValues, pairPath);
						if (isEmptyValue(value) || isEmptyValue(pairValue)) {
								return true;
						}
						const difference = compareBounds(type, String(value), String(pairValue));
						if (rangeBound.bound === "min" && difference > 0) {
								return i18n.t("{{label}} must not be greater than {{pairLabel}}", {label, pairLabel});
						}
						if (rangeBound.bound === "max" && difference < 0) {
								return i18n.t("{{label}} must not be less than {{pairLabel}}", {label, pairLabel});
						}
						return true;
				}
		};
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
						{dataType.supportedParams?.map((param, index) => {
								const {type, fieldProps, options, keys, label} = param;
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
										const objectValue = dataTypeConfig?.options?.params?.[index] ?? {};
										return keys?.filter(({showWhen}) => !showWhen || showWhen.values.includes(objectValue[showWhen.key])).map((keyParam) => {
												const {type, fieldProps, label, key, options, rangeBound} = keyParam;
												const pairLabel = find(keys, ['key', rangeBound?.pair])?.label ?? "";
												return options ? <RHFSingleSelectField
																options={options?.map(({name, value}) => ({label: name, value})) ?? []} {...fieldProps}
																type={type} key={`${key}-${label}-field`} label={label}
																name={`${name}.options.params.${index}.${key}`}/> :
														<RHFTextInputField {...fieldProps} type={type} key={`${key}-${label}-field`} label={label}
																							 validations={getRangeValidations(keyParam, `${name}.options.params.${index}.${rangeBound?.pair}`, pairLabel)}
																							 name={`${name}.options.params.${index}.${key}`}/>
										})
								}

								if (type === "boolean") {
										return <RHFCheckboxField  label={label} name={`${name}.options.requiresOrgUnitCode`}/>
								}

								if (['text', 'number', 'date'].includes(type)) {
										const pairLabel = dataType.supportedParams?.[param.rangeBound?.pair as number]?.label ?? "";
										return (
												<RHFTextInputField key={`${label}-field`} {...fieldProps} label={label} type={type}
																					 validations={getRangeValidations(param, `${name}.options.params.${param.rangeBound?.pair}`, pairLabel)}
																					 name={`${name}.options.params.${index}`}/>
										)
								}


						})}
				</div>
		)
}

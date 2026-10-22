import React from "react";
import { useWatch } from "react-hook-form";
import { find, get, isNil } from "lodash";
import i18n from "@dhis2/d2-i18n";
import {
	RHFCheckboxField,
	RHFSingleSelectField,
	RHFTextInputField,
} from "@hisptz/dhis2-ui";
import { supportedDataTypes } from "../../../script/constants/dataTypes";
import { DataItemConfig, SupportedParam } from "../../../script/interfaces";

function isEmptyValue(value: unknown) {
	return isNil(value) || value === "";
}

function compareBounds(
	type: SupportedParam["type"],
	value: string,
	pairValue: string,
): number {
	if (type === "number") {
		return Number(value) - Number(pairValue);
	}
	// date, time and datetime-local values are ISO formatted, so they order as strings
	return value < pairValue ? -1 : value > pairValue ? 1 : 0;
}

// Validates that a range field is on the right side of its pair. Only compares when both ends are set.
function getRangeValidations(
	{ rangeBound, type, label }: SupportedParam,
	pairPath: string,
	pairLabel: string,
) {
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
			const difference = compareBounds(
				type,
				String(value),
				String(pairValue),
			);
			if (rangeBound.bound === "min" && difference > 0) {
				return i18n.t("{{label}} must not be greater than {{pairLabel}}", {
					label,
					pairLabel,
				});
			}
			if (rangeBound.bound === "max" && difference < 0) {
				return i18n.t("{{label}} must not be less than {{pairLabel}}", {
					label,
					pairLabel,
				});
			}
			return true;
		},
	};
}

function toSelectOptions(options?: SupportedParam["options"]) {
	return options?.map(({ name, value }) => ({ label: name, value })) ?? [];
}

/*
 * The settings of the selected generator, for example the min and max of a number.
 * Field names follow DataItemConfig.options.params, which the generation engine reads.
 */
export function ParamFields({ path }: { path: string }) {
	const config = useWatch({ name: path }) as DataItemConfig | undefined;
	const dataType = find(supportedDataTypes, ["name", config?.dataTypeName]);

	if (!dataType?.supportedParams) {
		return null;
	}

	return (
		<>
			{dataType.supportedParams.map((param, index) => {
				const { type, fieldProps, options, keys, label } = param;
				const paramPath = `${path}.options.params.${index}`;

				if (type === "options") {
					return (
						<RHFSingleSelectField
							key={`${label}-field`}
							{...fieldProps}
							dense
							clearable
							filterable
							label={label}
							options={toSelectOptions(options)}
							name={paramPath}
						/>
					);
				}

				if (type === "object") {
					const objectValue =
						(config?.options?.params?.[index] as Record<string, unknown>) ??
						{};
					return keys
						?.filter(
							({ showWhen }) =>
								!showWhen ||
								showWhen.values.includes(objectValue[showWhen.key]),
						)
						.map((keyParam) => {
							const {
								type: keyType,
								fieldProps: keyFieldProps,
								label: keyLabel,
								key,
								options: keyOptions,
								rangeBound,
							} = keyParam;
							const pairLabel =
								find(keys, ["key", rangeBound?.pair])?.label ?? "";
							if (keyOptions) {
								return (
									<RHFSingleSelectField
										key={`${key}-field`}
										{...keyFieldProps}
										dense
										label={keyLabel}
										options={toSelectOptions(keyOptions)}
										name={`${paramPath}.${key}`}
									/>
								);
							}
							if (keyType === "boolean") {
								return (
									<RHFCheckboxField
										key={`${key}-field`}
										dense
										label={keyLabel}
										name={`${paramPath}.${key}`}
									/>
								);
							}
							return (
								<RHFTextInputField
									key={`${key}-field`}
									{...keyFieldProps}
									dense
									type={keyType}
									label={keyLabel}
									validations={getRangeValidations(
										keyParam,
										`${paramPath}.${rangeBound?.pair}`,
										pairLabel,
									)}
									name={`${paramPath}.${key}`}
								/>
							);
						});
				}

				if (type === "boolean") {
					// Kept at options.requiresOrgUnitCode so profiles saved before the redesign still load it
					return (
						<RHFCheckboxField
							key={`${label}-field`}
							dense
							label={label}
							name={`${path}.options.requiresOrgUnitCode`}
						/>
					);
				}

				if (["text", "number", "date"].includes(type)) {
					const pairLabel =
						dataType.supportedParams?.[param.rangeBound?.pair as number]
							?.label ?? "";
					return (
						<RHFTextInputField
							key={`${label}-field`}
							{...fieldProps}
							dense
							label={label}
							type={type}
							validations={getRangeValidations(
								param,
								`${path}.options.params.${param.rangeBound?.pair}`,
								pairLabel,
							)}
							name={paramPath}
						/>
					);
				}

				return null;
			})}
		</>
	);
}

import React, { useMemo } from "react";
import {
	Controller,
	useFormContext,
	useFormState,
	useWatch,
} from "react-hook-form";
import {
	MultiSelectField,
	MultiSelectOption,
	SingleSelectField,
	SingleSelectOption,
	Tag,
} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { get, isEmpty } from "lodash";
import { ConfigurableField } from "../utils/sections";
import { getGeneratorOptions } from "../utils/generators";
import { ParamFields } from "./ParamFields";
import styles from "./FieldRow.module.css";

function formatValueType(valueType?: string): string {
	if (!valueType) {
		return "";
	}
	const words = valueType.toLowerCase().replace(/_/g, " ");
	return words.charAt(0).toUpperCase() + words.slice(1);
}

export interface FieldRowProps {
	field: ConfigurableField;
	// Shows a "Suggested" tag while the suggested generator hasn't been changed
	showSuggestion?: boolean;
}

export function FieldRow({ field, showSuggestion }: FieldRowProps) {
	const { dataItem, label, required, path } = field;
	const { setValue, getValues } = useFormContext();
	const { dirtyFields } = useFormState({ name: `${path}.dataTypeName` });
	const generatorOptions = useMemo(
		() => getGeneratorOptions(dataItem),
		[dataItem],
	);
	const optionSetOptions = useMemo(
		() =>
			dataItem.optionSet?.options?.map((option) => ({
				label: option.name ?? option.code,
				value: option.code,
			})) ?? [],
		[dataItem],
	);
	const generator = useWatch({ name: `${path}.dataTypeName` });
	// A field with one possible generator was not really suggested, so it is never tagged
	const isSuggested =
		!!showSuggestion &&
		!!generator &&
		generatorOptions.length > 1 &&
		!get(dirtyFields, `${path}.dataTypeName`);

	return (
		<div className={styles.row}>
			<div className={styles.field}>
				<span className={styles.label}>{label}</span>
				<div className={styles.meta}>
					{required && <Tag neutral>{i18n.t("Required")}</Tag>}
					{isSuggested && <Tag>{i18n.t("Suggested")}</Tag>}
					<span className={styles.valueType}>
						{dataItem.optionSet
							? i18n.t("Option set")
							: formatValueType(dataItem.valueType)}
					</span>
				</div>
			</div>
			<div className={styles.generator}>
				<Controller
					name={`${path}.dataTypeName`}
					rules={{
						validate: (value?: string) =>
							!required ||
							!!value ||
							i18n.t("Choose a generator for this required field"),
					}}
					render={({ field: input, fieldState }) => (
						<SingleSelectField
							dense
							filterable={generatorOptions.length > 8}
							clearable={!required}
							clearText={i18n.t("Clear")}
							required={required}
							label={i18n.t("Generator")}
							placeholder={i18n.t("Not generated")}
							noMatchText={i18n.t("No generators match")}
							selected={
								generatorOptions.some(({ value }) => value === input.value)
									? input.value
									: undefined
							}
							error={!!fieldState.error}
							validationText={fieldState.error?.message}
							onChange={({ selected }: { selected?: string }) => {
								const previous = getValues(`${path}.dataTypeName`);
								input.onChange(selected ?? "");
								// Settings belong to a generator, so they are cleared when it changes
								if (previous !== selected) {
									setValue(`${path}.options`, undefined, {
										shouldDirty: true,
									});
								}
							}}
							onBlur={input.onBlur}
						>
							{generatorOptions.map(({ label, value }) => (
								<SingleSelectOption key={value} label={label} value={value} />
							))}
						</SingleSelectField>
					)}
				/>
			</div>
			<div className={styles.settings}>
				{dataItem.optionSet && (
					<Controller
						name={`${path}.options.params.0`}
						rules={{
							validate: (value?: string[]) =>
								!required ||
								!isEmpty(value) ||
								i18n.t("Select at least one option"),
						}}
						render={({ field: input, fieldState }) => (
							<MultiSelectField
								dense
								filterable
								label={i18n.t("Options to use")}
								placeholder={i18n.t("Choose options")}
								helpText={i18n.t(
									"Values are picked at random from the selected options",
								)}
								selected={input.value ?? []}
								error={!!fieldState.error}
								validationText={fieldState.error?.message}
								onChange={({ selected }: { selected: string[] }) =>
									input.onChange(selected)
								}
								onBlur={input.onBlur}
							>
								{optionSetOptions.map(({ label, value }) => (
									<MultiSelectOption
										key={`${value}-option`}
										label={label}
										value={value}
									/>
								))}
							</MultiSelectField>
						)}
					/>
				)}
				<ParamFields path={path} />
			</div>
		</div>
	);
}

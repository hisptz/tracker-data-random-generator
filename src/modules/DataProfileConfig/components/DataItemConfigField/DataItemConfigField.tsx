import {DataElement, TrackedEntityAttribute} from "@hisptz/dhis2-utils";
import {SupportedDataTypeNames, supportedDataTypes} from "../../../../script/constants/dataTypes";
import React, {useEffect} from "react"
import {RHFSingleSelectField} from "@hisptz/dhis2-ui";
import i18n from '@dhis2/d2-i18n';
import {head, isEmpty} from "lodash";
import {Controller, useFormContext} from "react-hook-form";
import {colors, MultiSelectField, MultiSelectOption} from "@dhis2/ui"
import {ParamConfigField} from "./components/ParamConfigField";

export interface DataItemConfigFieldProps {
    name: string;
    dataItem: TrackedEntityAttribute | DataElement;
    required?: boolean
}


export function DataItemConfigField({dataItem, required, name}: DataItemConfigFieldProps) {
    const {setValue} = useFormContext();
    const supportedDataConfig = supportedDataTypes.filter(({dhis2Fields, name}) => {
        if (dataItem.optionSet && name !== SupportedDataTypeNames.OPTIONS) {
            return false;
        }
        if (!dataItem.optionSet && name === SupportedDataTypeNames.OPTIONS) {
            return false;
        }
        return (!!dataItem.valueType && dhis2Fields.includes(dataItem.valueType)) || isEmpty(dhis2Fields)
    });
    const fieldOptions = supportedDataConfig.map(({name}) => ({label: name, value: name}));

    const optionSetOptions = dataItem.optionSet?.options?.map((option) => ({
        label: option.name as string,
        value: option.code
    })) ?? []

    useEffect(() => {
        setValue(`${name}.dataItemId`, dataItem.id);
        if (fieldOptions?.length === 1) {
            setValue(`${name}.dataTypeName`, head(fieldOptions)?.value)
        }
    }, [])

    return (
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 2fr'}} className="w-100 gap-16 align-center">
            <span>{dataItem.formName ?? dataItem.name}<span style={{color: colors.red600}}>{required ? "*" : ""}</span></span>
            <RHFSingleSelectField
                required={required}
                options={fieldOptions}
                name={`${name}.dataTypeName`}
                label={i18n.t("Data type")}
                validations={{
                    required: {value: required, message: i18n.t("Data type is required for this field")}
                }}
            />
            <div className="w-100">
                {
                    dataItem.optionSet && (
                        <Controller
                            rules={{
                                required: {
                                    value: required ?? false,
                                    message: i18n.t("Options are required for this field")
                                }
                            }}
                            render={
                                ({field, fieldState, formState,}) => {

                                    return (
                                        <MultiSelectField
                                            filterable
                                            label={i18n.t("Options")}
                                            onChange={({selected}: { selected: string[] }) => field.onChange(selected)}
                                            selected={field.value ?? []}
                                            error={!!fieldState.error}
                                            validationText={fieldState.error?.message}
                                        >
                                            {
                                                optionSetOptions.map(({label, value}) => (
                                                    <MultiSelectOption key={`${label}`} label={label} value={value}/>))
                                            }
                                        </MultiSelectField>
                                    )
                                }
                            } name={`${name}.options.params.0`}/>
                    )
                }
                <ParamConfigField name={name}/>
            </div>
        </div>
    )
}

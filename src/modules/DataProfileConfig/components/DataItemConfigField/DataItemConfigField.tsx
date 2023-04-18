import {DataElement, TrackedEntityAttribute} from "@hisptz/dhis2-utils";
import {SupportedDataTypeNames, supportedDataTypes} from "../../../../script/constants/dataTypes";
import React, {useEffect} from "react"
import {RHFSingleSelectField} from "@hisptz/dhis2-ui";
import i18n from '@dhis2/d2-i18n';
import {head, isEmpty} from "lodash";
import {Controller, useFormContext} from "react-hook-form";
import {MultiSelectField, MultiSelectOption} from "@dhis2/ui"

export interface DataItemConfigFieldProps {
    name: string;
    dataItem: TrackedEntityAttribute | DataElement;
    type: "attribute" | "dataElement"
}


export function DataItemConfigField({dataItem, type, name}: DataItemConfigFieldProps) {
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
            <span>{dataItem.formName ?? dataItem.name}</span>
            <RHFSingleSelectField
                options={fieldOptions}
                name={`${name}.dataTypeName`}
                label={i18n.t("Data type")}
            />
            <div className="w-100">
                {
                    dataItem.optionSet && (
                        <Controller render={
                            ({field, fieldState, formState,}) => {

                                return (
                                    <MultiSelectField
                                        label={i18n.t("Options")}
                                        onChange={({selected}: { selected: string[] }) => field.onChange(selected)}
                                        selected={field.value ?? []}
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
            </div>
        </div>
    )
}

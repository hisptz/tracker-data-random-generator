import React from "react"
import {ProgramStage} from "@hisptz/dhis2-utils";
import {RHFTextInputField} from "@hisptz/dhis2-ui";
import i18n from '@dhis2/d2-i18n';
import {Field} from "@dhis2/ui"
import {DataItemConfigField} from "../DataItemConfigField";

export interface ProgramStageConfigProps {
    programStage: ProgramStage,
    name: string;
}


export function ProgramStageConfig({programStage, name}: ProgramStageConfigProps) {
    const repeatable = programStage.repeatable;
    const dataElements = programStage.programStageDataElements?.map(({dataElement}) => dataElement) ?? [];
    return (
        <div className="column gap-16">
            <h2 style={{margin: 0}}>{programStage.displayName}</h2>
            <div className="column gap-16">
                <h3>{i18n.t("General configuration")}</h3>
                <Field label={i18n.t("Event date boundaries")}>
                    <div className="row gap-16 ">
                        <RHFTextInputField
                            name={`${name}.eventTimeBoundary.min`}
                            label={i18n.t("Min")}
                            type={'date'}
                        />
                        <RHFTextInputField
                            name={`${name}.eventTimeBoundary.max`}
                            label={i18n.t("Max")}
                            type={'date'}
                        />
                    </div>
                </Field>
                {
                    repeatable && (
                        <RHFTextInputField name={`${name}.count`} min={0} max={10} type="number"/>
                    )
                }
            </div>
            <div className="column">
                <h3>{i18n.t("Data elements")}</h3>
                <div className="column gap-16">
                    {
                        dataElements.map((dataItem, fieldIndex) => (
                            <DataItemConfigField name={`${name}.dataElements.${fieldIndex}`} dataItem={dataItem}
                                                 type="dataElement"/>))
                    }
                </div>
            </div>
        </div>
    )
}

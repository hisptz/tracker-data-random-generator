import React, {useEffect} from "react"
import {ProgramStage} from "@hisptz/dhis2-utils";
import {RHFTextInputField} from "@hisptz/dhis2-ui";
import i18n from '@dhis2/d2-i18n';
import {IconChevronDown24, IconChevronUp24} from "@dhis2/ui"
import {DataItemConfigField} from "../DataItemConfigField";
import {useFormContext} from "react-hook-form";
import Collapsible from "react-collapsible";

export interface ProgramStageConfigProps {
    programStage: ProgramStage,
    name: string;
}


export function ProgramStageConfig({programStage, name}: ProgramStageConfigProps) {
    const repeatable = programStage.repeatable;
    const dataElements = programStage.programStageDataElements?.map(({dataElement}) => dataElement) ?? [];
    const {setValue} = useFormContext();

    useEffect(() => {
        setValue(`${name}.id`, programStage.id)
    }, [])


    return (
        <div className="column gap-16">
            <Collapsible
                triggerWhenOpen={
                    <div className="row space-between">
                        <h3 style={{margin: 0}}>{programStage.displayName}</h3>
                        <IconChevronUp24/>
                    </div>
                }
                trigger={
                    <div className="row space-between">
                        <h3 style={{margin: 0}}>{programStage.displayName}</h3>
                        <IconChevronDown24/>
                    </div>
                }>
                <div className="column gap-16 ph-16">
                    <h4>{i18n.t("General configuration")}</h4>
                    {
                        repeatable && (
                            <RHFTextInputField name={`${name}.count`} min={0} max={10} type="number"/>
                        )
                    }
                </div>
                <div className="column ph-16">
                    <h4>{i18n.t("Data elements")}</h4>
                    <div className="column gap-16">
                        {
                            dataElements.map((dataItem, fieldIndex) => (
                                <DataItemConfigField key={`${dataItem.id}-config`}
                                                     name={`${name}.dataElements.${fieldIndex}`} dataItem={dataItem}
                                                     type="dataElement"/>))
                        }
                    </div>
                </div>
            </Collapsible>
        </div>
    )
}

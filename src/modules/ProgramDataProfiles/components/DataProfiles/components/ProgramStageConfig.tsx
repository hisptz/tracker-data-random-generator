import {Field} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import {RHFTextInputField} from "@hisptz/dhis2-ui";
import React, {useEffect} from "react";
import {ProgramStage} from "@hisptz/dhis2-utils";
import {useFormContext, useWatch} from "react-hook-form";
import {DateTime} from "luxon";


function StartDateSelector({index}: { index: number }) {
    const [enrollmentDateMin, max] = useWatch({
        name: [
            `enrollmentTimeBoundary.min`,
            `stages.${index}.max`
        ]
    })

    return (
        <RHFTextInputField
            name={`stages.${index}.min`}
            label={i18n.t("Min")}
            type={'date'}
            min={enrollmentDateMin}
            max={max ?? DateTime.now().toFormat('yyyy-MM-dd')}
            validations={{
                min: {
                    value: enrollmentDateMin,
                    message: i18n.t("This date should be after {{date}}", {
                        date: enrollmentDateMin
                    })
                },
                max: {
                    value: DateTime.now().toFormat('yyyy-MM-dd'),
                    message: i18n.t("This date should not be in the future")
                }
            }}
        />
    )
}

function EndDateSelector({index}: { index: number }) {
    const [enrollmentDateMin, min] = useWatch({
        name: [
            `enrollmentTimeBoundary.min`,
            `stages.${index}.min`
        ]
    })
    return (
        <RHFTextInputField
            name={`stages.${index}.max`}
            min={min ?? enrollmentDateMin}
            max={DateTime.now().toFormat('yyyy-MM-dd')}
            label={i18n.t("Max")}
            type={'date'}
            validations={{
                min: {
                    value: min ?? enrollmentDateMin,
                    message: i18n.t("This date should be after {{date}}", {
                        date: min ?? enrollmentDateMin
                    })
                },
                max: {
                    value: DateTime.now().toFormat('yyyy-MM-dd'),
                    message: i18n.t("This date should not be in the future")
                }
            }}
        />
    )
}


export function ProgramStageConfig({stage, index}: { stage: ProgramStage, index: number }) {
    const {setValue} = useFormContext();
    useEffect(() => {
        setValue(`stages.${index}.id`, stage.id)
    }, []);

    return (
        <>
            <h4 style={{margin: 0}}>{stage.displayName}</h4>
            <Field label={i18n.t("Event date boundaries")}>
                <div className="row gap-16 ">
                    <StartDateSelector index={index}/>
                    <EndDateSelector index={index}/>
                </div>
            </Field>
        </>
    )
}

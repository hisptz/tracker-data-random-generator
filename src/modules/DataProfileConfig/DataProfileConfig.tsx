import React, {useCallback} from "react"
import {useRecoilValue} from "recoil";
import {ProgramState} from "../ProgramDataProfiles/state/program";
import {useParams} from "react-router-dom";
import i18n from '@dhis2/d2-i18n';
import {FormProvider, useForm} from "react-hook-form";
import {DataConfigurationForm} from "../../script/interfaces";
import {TeiAttributesConfig} from "./components/TeiAttributesConfig";
import {Button, ButtonStrip, Divider} from "@dhis2/ui"
import {ProgramStageConfig} from "./components/ProgramStageConfig";
import {ProgramStage} from "@hisptz/dhis2-utils";

export function DataProfileConfig() {
    const {id: programId} = useParams();
    const program = useRecoilValue(ProgramState(programId));
    const form = useForm<DataConfigurationForm>();

    const onFormSubmit = useCallback((data: DataConfigurationForm) => {

        console.log(data);
    }, [])

    return (
        <div style={{paddingBottom: 64}} className="h-100 w-100 column p-16">
            <h1>{i18n.t("Data profile for program {{program}}", {
                program: program.displayName
            })}</h1>
            <div style={{maxWidth: 1080, width: "100%", alignSelf: "center"}}>
                <FormProvider {...form}>
                    <div className='column gap-16'>
                        {program.registration && (<div className="column gap-16">
                            <div className='column gap-8'>
                                <h3 style={{margin: 0}}>{i18n.t("Tracked entity attributes")}</h3>
                                <Divider/>
                            </div>
                            <div>
                                <TeiAttributesConfig/>
                            </div>
                        </div>)}
                        <div className='column gap-8'>
                            <h3 style={{margin: 0}}>{i18n.t("Program stages")}</h3>
                            <Divider/>
                        </div>
                        <div className="column gap-32">
                            {
                                program.programStages?.map((stage: ProgramStage, index: number) => (
                                    <ProgramStageConfig programStage={stage} name={`programStages.${index}`}/>))
                            }
                        </div>
                        <div style={{paddingBottom: 64}} className="">
                            <ButtonStrip>
                                <Button>{i18n.t("Cancel")}</Button>
                                <Button onClick={form.handleSubmit(onFormSubmit)} primary>{i18n.t("Save")}</Button>
                            </ButtonStrip>
                        </div>
                    </div>
                </FormProvider>
            </div>
        </div>
    )
}


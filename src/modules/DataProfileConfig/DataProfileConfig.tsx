import React, {useCallback} from "react"
import {useRecoilValue} from "recoil";
import {ProgramState} from "../ProgramDataProfiles/state/program";
import {useNavigate, useParams} from "react-router-dom";
import i18n from '@dhis2/d2-i18n';
import {FormProvider, useForm} from "react-hook-form";
import {DataConfigurationForm} from "../../script/interfaces";
import {TeiAttributesConfig} from "./components/TeiAttributesConfig";
import {Button, ButtonStrip, Card, Divider, IconChevronDown24, IconChevronUp24} from "@dhis2/ui"
import {ProgramStageConfig} from "./components/ProgramStageConfig";
import {ProgramStage, uid} from "@hisptz/dhis2-utils";
import {RHFTextInputField} from "@hisptz/dhis2-ui";
import {useSaveConfig} from "./hooks/save";
import {useDefaultValue} from "./hooks/form";
import Collapsible from "react-collapsible";

export function DataProfileConfig() {
    const {id: programId} = useParams();
    const navigate = useNavigate();
    const program = useRecoilValue(ProgramState(programId));
    const defaultValues = useDefaultValue();
    const form = useForm<DataConfigurationForm>(
        {
            defaultValues
        }
    );
    const {save, loading} = useSaveConfig();

    const onFormSubmit = useCallback(async (data: DataConfigurationForm) => {
        const updatedData = {
            ...data,
            id: defaultValues?.id ?? uid()
        }
        await save(updatedData);
        navigate(-1)
    }, [save]);

    return (
        <div style={{paddingBottom: 64}} className="h-100 w-100 column p-16">
            <h1>{i18n.t("Data profile for program {{program}}", {
                program: program.displayName
            })}</h1>
            <div style={{maxWidth: 1080, width: "100%", alignSelf: "center"}}>
                <FormProvider {...form}>
                    <div className='column gap-16'>
                        <Card>
                            <div className="p-16">
                                <div className='column'>
                                    <h3 style={{margin: 0}}>{i18n.t("General")}</h3>
                                    <Divider/>
                                </div>
                                <div className="column gap-16">
                                    <RHFTextInputField
                                        label={i18n.t("Name")}
                                        name="name"
                                        type="text"
                                        required
                                        validations={{
                                            required: i18n.t("Name is required")
                                        }}
                                    />
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div className="p-16">
                                {program.registration && (<div className="column gap-16">
                                    <Collapsible
                                        triggerWhenOpen={
                                            <div className='column'>
                                                <div className="row space-between gap-16">
                                                    <h3 style={{margin: 0}}>{i18n.t("Tracked entity attributes")}</h3>
                                                    <IconChevronUp24/>
                                                </div>
                                                <Divider/>
                                            </div>
                                        }
                                        trigger={
                                            <div className='column'>
                                                <div className="row space-between gap-16">
                                                    <h3 style={{margin: 0}}>{i18n.t("Tracked entity attributes")}</h3>
                                                    <IconChevronDown24/>

                                                </div>
                                                <Divider/>
                                            </div>
                                        }>
                                        <div className="column gap-8 ph-16">
                                            <TeiAttributesConfig/>
                                        </div>
                                    </Collapsible>
                                </div>)}
                            </div>
                        </Card>
                        <Card>
                            <div className="p-16">
                                <div className='column'>
                                    <h3 style={{margin: 0}}>{i18n.t("Program stages")}</h3>
                                    <Divider/>
                                </div>
                                <div className="column gap-16">
                                    {
                                        program.programStages?.map((stage: ProgramStage, index: number) => (
                                            <ProgramStageConfig key={`${stage.id}-config-area`} programStage={stage}
                                                                name={`programStages.${index}`}/>))
                                    }
                                </div>
                            </div>
                        </Card>
                        <div style={{paddingBottom: 64}} className="">
                            <ButtonStrip>
                                <Button onClick={() => navigate(-1)}>{i18n.t("Cancel")}</Button>
                                <Button loading={loading} onClick={form.handleSubmit(onFormSubmit)}
                                        primary>{!loading ? i18n.t("Save") : i18n.t("Saving...")}</Button>
                            </ButtonStrip>
                        </div>
                    </div>
                </FormProvider>
            </div>
        </div>
    )
}


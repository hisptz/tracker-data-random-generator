import React, {useCallback, useMemo} from "react";
import {
    Button,
    ButtonStrip,
    Field,
    Modal,
    ModalActions,
    ModalContent,
    ModalTitle,
    MultiSelectField,
    MultiSelectOption
} from "@dhis2/ui"
import i18n from '@dhis2/d2-i18n';
import {useParams} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {ProgramState} from "../../../state/program";
import {Controller, FormProvider, useForm} from "react-hook-form";
import {RHFCheckboxField, RHFTextInputField} from "@hisptz/dhis2-ui";
import {DateTime} from "luxon";
import {useGenerateData} from "../hooks/generate";
import {uniqBy} from "lodash";

export interface GenerateDataModalProps {
    profileId: string | null,
    onClose: () => void
}


export type ExportType = "json" | "upload"

export interface GenerateConfig {
    orgUnits: string[];
    enrollmentTimeBoundary?: {
        min: string;
        max: string;
    };
    count: number;
    shouldUploadData?: boolean;
    shouldExportData?: boolean;
}

export function GenerateDataModal({profileId, onClose}: GenerateDataModalProps) {
    const {id: programId} = useParams();
    const program = useRecoilValue(ProgramState(programId));
    const orgUnitOptions = useMemo(() => {
        return uniqBy(program.organisationUnits.map(({name, id}: { name: string; id: string }) => ({
            label: name,
            value: id
        })), 'value') as any[]
    }, [program]);
    const form = useForm<GenerateConfig>();


    const onCloseModal = useCallback(() => {
        form.reset({});
        onClose();
    }, [])

    const {generate} = useGenerateData(profileId, onCloseModal);

    return (
        <Modal position="middle" onClose={onCloseModal} hide={!profileId}>
            <ModalTitle>
                {i18n.t("Generate data")}
            </ModalTitle>
            <ModalContent>
                <FormProvider {...form}>
                    <div className="column gap-16">
                        <Controller
                            render={
                                ({field, fieldState, formState,}) => {

                                    return (
                                        <MultiSelectField
                                            filterable
                                            label={i18n.t("Organisation units")}
                                            onChange={({selected}: { selected: string[] }) => field.onChange(selected)}
                                            selected={field.value ?? []}
                                        >
                                            {
                                                orgUnitOptions.map(({label, value}: {
                                                    label: string;
                                                    value: string
                                                }) => (
                                                    <MultiSelectOption key={`${label}-option`} label={label}
                                                                       value={value}/>))
                                            }
                                        </MultiSelectField>
                                    )
                                }
                            }
                            name={`orgUnits`}
                        />
                        {
                            program.registration && (
                                <Field label={i18n.t("Enrollment date boundary")}>
                                    <div style={{justifyContent: 'stretch'}} className="row w-100 gap-16">
                                        <div className="w-100">
                                            <RHFTextInputField
                                                max={DateTime.now().toFormat('yyyy-MM-dd')}
                                                fullWidth
                                                type="date" label={i18n.t("Min")}
                                                name={`enrollmentTimeBoundary.min`}
                                            />
                                        </div>
                                        <div className="w-100">
                                            <RHFTextInputField
                                                max={DateTime.now().toFormat('yyyy-MM-dd')}
                                                fullWidth
                                                type="date" label={i18n.t("Max")}
                                                name={`enrollmentTimeBoundary.max`}
                                            />
                                        </div>
                                    </div>
                                </Field>
                            )
                        }
                        <RHFTextInputField
                            helpText={i18n.t("Maximum of 100 records")}
                            min={"0"}
                            max={"100"}
                            type="number"
                            label={i18n.t("Number of records")}
                            name={`count`}
                        />
                        <RHFCheckboxField label={i18n.t("Export JSON")} name={'shouldExportData'}/>
                        <RHFCheckboxField label={i18n.t("Upload data")} name={'shouldUploadData'}/>
                    </div>
                </FormProvider>

            </ModalContent>
            <ModalActions>
                <ButtonStrip>
                    <Button onClick={onCloseModal}>{i18n.t("Cancel")}</Button>
                    <Button onClick={form.handleSubmit(generate)} primary>{i18n.t("Generate")}</Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}

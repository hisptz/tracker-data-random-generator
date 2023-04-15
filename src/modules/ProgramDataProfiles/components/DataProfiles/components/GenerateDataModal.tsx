import React, {useMemo} from "react";
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
import {RHFTextInputField} from "@hisptz/dhis2-ui";
import {useSavedObject} from "@dhis2/app-service-datastore";
import {find} from "lodash";
import {DateTime} from "luxon";

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
    exportTypes: ExportType[]
}

export function GenerateDataModal({profileId, onClose}: GenerateDataModalProps) {
    const {id: programId} = useParams();
    const program = useRecoilValue(ProgramState(programId));
    const orgUnitOptions = useMemo(() => {
        return program.organisationUnits.map(({name, id}: { name: string; id: string }) => ({label: name, value: id}))
    }, [program]);
    const form = useForm<GenerateConfig>();
    const [profiles] = useSavedObject(programId as string)
    const profile = find(profiles, ['id', profileId]);

    return (
        <Modal position="middle" onClose={onClose} hide={!profileId}>
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
                        <Controller render={
                            ({field, fieldState, formState,}) => {
                                return (
                                    <MultiSelectField
                                        filterable
                                        label={i18n.t("Export type")}
                                        onChange={({selected}: { selected: string[] }) => field.onChange(selected)}
                                        selected={field.value ?? []}
                                    >
                                        {
                                            [
                                                {label: i18n.t("Upload"), value: "upload"},
                                                {label: i18n.t("JSON"), value: "json"},
                                            ].map(({label, value}: { label: string; value: string }) => (
                                                <MultiSelectOption key={`${label}-option`} label={label}
                                                                   value={value}/>))
                                        }
                                    </MultiSelectField>
                                )
                            }
                        } name={`exportTypes`}/>
                    </div>
                </FormProvider>

            </ModalContent>
            <ModalActions>
                <ButtonStrip>
                    <Button>{i18n.t("Cancel")}</Button>
                    <Button primary>{i18n.t("Generate")}</Button>
                </ButtonStrip>
            </ModalActions>
        </Modal>
    )
}

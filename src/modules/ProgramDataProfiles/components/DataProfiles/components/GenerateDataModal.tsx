import React, { useCallback, useMemo } from "react";
import {
	Button,
	ButtonStrip,
	Field,
	Modal,
	ModalActions,
	ModalContent,
	ModalTitle,
	MultiSelectField,
	MultiSelectOption,
} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { useAlert } from "@dhis2/app-runtime";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ProgramState } from "../../../state/program";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { RHFCheckboxField, RHFTextInputField } from "@hisptz/dhis2-ui";
import { DateTime } from "luxon";
import { useGenerateData } from "../hooks/generate";
import { isEmpty, uniqBy } from "lodash";
import { ProgramStageConfig } from "./ProgramStageConfig";

export interface GenerateDataModalProps {
	profileId: string | null;
	onClose: () => void;
}

export type ExportType = "json" | "upload";

export interface GenerateConfig {
	orgUnits: string[];
	stages: { id: string; min?: string; max?: string }[];
	enrollmentTimeBoundary?: {
		min: string;
		max: string;
	};
	count: number;
	shouldUploadData?: boolean;
	shouldExportData?: boolean;
	skipRuleEngine?: boolean;
}

export interface EventGenerateConfig {
	orgUnits: string[];
	count: number;
	eventTimeBoundary: { min: string; max: string };
	shouldUploadData?: boolean;
	shouldExportData?: boolean;
	skipRuleEngine?: boolean;
}

const defaultValues = {
	orgUnits: [],
	count: 10,
	shouldExportData: false,
	shouldUploadData: true,
	skipRuleEngine: false,
};

const requiredMessage = i18n.t("This field is required");
const futureMessage = i18n.t("This date should not be in the future");

export function GenerateDataModal({
	profileId,
	onClose,
}: GenerateDataModalProps) {
	const { id: programId } = useParams();
	const program = useRecoilValue(ProgramState(programId));
	const orgUnitOptions = useMemo(() => {
		return uniqBy(
			program?.organisationUnits.map(
				({
					displayName,
					name,
					id,
				}: {
					displayName?: string;
					name: string;
					id: string;
				}) => ({
					label: displayName ?? name,
					value: id,
				}),
			),
			"value",
		) as never[];
	}, [program]);
	const form = useForm<GenerateConfig | EventGenerateConfig>({
		defaultValues,
		shouldFocusError: false,
	});
	const today = DateTime.now().toFormat("yyyy-MM-dd");
	const enrollmentMin = form.watch("enrollmentTimeBoundary.min" as never);
	const eventMin = form.watch("eventTimeBoundary.min" as never);
	const shouldUploadData = form.watch("shouldUploadData");

	const onCloseModal = useCallback(() => {
		form.reset(defaultValues);
		onClose();
	}, [form, onClose]);

	const { generate, uploading } = useGenerateData(profileId, onCloseModal);
	const { show: showFormError } = useAlert(
		i18n.t(
			"Data can't be generated. There is an error on the form, please check and try again",
		),
		{ critical: true },
	);

	return (
		<Modal position="middle" onClose={onCloseModal} hide={!profileId}>
			<ModalTitle>{i18n.t("Generate data")}</ModalTitle>
			<ModalContent>
				<FormProvider {...form}>
					<div className="column gap-16">
						<Controller
							rules={{
								validate: (value) =>
									!isEmpty(value) ||
									i18n.t(
										"Select at least one organisation unit",
									),
							}}
							render={({ field, fieldState }) => {
								return (
									<MultiSelectField
										required
										error={!!fieldState.error}
										validationText={
											fieldState.error?.message
										}
										filterable
										label={i18n.t("Organisation units")}
										onChange={({
											selected,
										}: {
											selected: string[];
										}) => field.onChange(selected)}
										selected={field.value ?? []}
									>
										{orgUnitOptions.map(
											({
												label,
												value,
											}: {
												label: string;
												value: string;
											}) => (
												<MultiSelectOption
													key={`${label}-option`}
													label={label}
													value={value}
												/>
											),
										)}
									</MultiSelectField>
								);
							}}
							name={"orgUnits"}
						/>
						{program?.registration && (
							<>
								<Field
									label={i18n.t("Enrollment date boundary")}
								>
									<div
										style={{ justifyContent: "stretch" }}
										className="row w-100 gap-16"
									>
										<div className="w-100">
											<RHFTextInputField
												max={today}
												fullWidth
												required
												type="date"
												label={i18n.t("Min")}
												name={
													"enrollmentTimeBoundary.min"
												}
												validations={{
													required: requiredMessage,
													max: {
														value: today,
														message: futureMessage,
													},
												}}
											/>
										</div>
										<div className="w-100">
											<RHFTextInputField
												min={enrollmentMin}
												max={today}
												fullWidth
												required
												type="date"
												label={i18n.t("Max")}
												name={
													"enrollmentTimeBoundary.max"
												}
												validations={{
													required: requiredMessage,
													min: {
														value: enrollmentMin,
														message: i18n.t(
															"This date should be after {{date}}",
															{
																date: enrollmentMin,
															},
														),
													},
													max: {
														value: today,
														message: futureMessage,
													},
												}}
											/>
										</div>
									</div>
								</Field>
								<div
									style={{ maxHeight: 500, overflow: "auto" }}
									className="column gap-16"
								>
									<h3 style={{ margin: 0 }}>
										{i18n.t("Program stages")}
									</h3>
									{program?.programStages?.map(
										(stage, index: number) => {
											return (
												<ProgramStageConfig
													key={`${stage.id}-config-generate`}
													stage={stage}
													index={index}
												/>
											);
										},
									)}
								</div>
							</>
						)}
						{!program?.registration && (
							<>
								<Field label={i18n.t("Event date boundaries")}>
									<div className="row gap-16 ">
										<RHFTextInputField
											name={"eventTimeBoundary.min"}
											label={i18n.t("Min")}
											type={"date"}
											required
											max={today}
											validations={{
												required: requiredMessage,
												max: {
													value: today,
													message: futureMessage,
												},
											}}
										/>
										<RHFTextInputField
											name={"eventTimeBoundary.max"}
											label={i18n.t("Max")}
											type={"date"}
											required
											min={eventMin}
											max={today}
											validations={{
												required: requiredMessage,
												min: {
													value: eventMin,
													message: i18n.t(
														"This date should be after {{date}}",
														{ date: eventMin },
													),
												},
												max: {
													value: today,
													message: futureMessage,
												},
											}}
										/>
									</div>
								</Field>
							</>
						)}
						<RHFTextInputField
							helpText={i18n.t("Maximum of 100 records")}
							min={"1"}
							max={"100"}
							step={"1"}
							required
							type="number"
							label={
								program?.registration
									? i18n.t("Number of tracked entities")
									: i18n.t("Number of events")
							}
							name={"count"}
							validations={{
								required: requiredMessage,
								min: {
									value: 1,
									message: i18n.t("Minimum of 1 record"),
								},
								max: {
									value: 100,
									message: i18n.t("Maximum of 100 records"),
								},
							}}
						/>
						<RHFCheckboxField
							label={i18n.t("Export JSON")}
							name={"shouldExportData"}
						/>
						<RHFCheckboxField
							label={i18n.t("Upload data")}
							name={"shouldUploadData"}
							validations={{
								validate: (
									value: boolean,
									values: GenerateConfig,
								) =>
									value ||
									values.shouldExportData ||
									i18n.t(
										"Select at least one of export or upload",
									),
							}}
						/>
						{shouldUploadData && (
							<RHFCheckboxField
								label={i18n.t("Skip program rules")}
								name={"skipRuleEngine"}
							/>
						)}
					</div>
				</FormProvider>
			</ModalContent>
			<ModalActions>
				<ButtonStrip>
					<Button onClick={onCloseModal}>{i18n.t("Cancel")}</Button>
					<Button
						loading={uploading || form.formState.isSubmitting}
						disabled={uploading || form.formState.isSubmitting}
						onClick={() =>
							form.handleSubmit(generate, () => showFormError())()
						}
						primary
					>
						{uploading
							? i18n.t("Uploading...")
							: form.formState.isSubmitting
								? i18n.t("Generating...")
								: i18n.t("Generate")}
					</Button>
				</ButtonStrip>
			</ModalActions>
		</Modal>
	);
}

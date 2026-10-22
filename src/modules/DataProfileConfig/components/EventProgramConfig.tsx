import React, { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCurrentProgram } from "../../../shared/components/ProgramProvider/ProgramProvider";
import { useDefaultValue, useInvalidFormAlert } from "../hooks/form";
import { FormProvider, useForm } from "react-hook-form";
import { DataConfigurationForm } from "../../../script/interfaces";
import { useSaveConfig } from "../hooks/save";
import { uid } from "@hisptz/dhis2-utils";
import i18n from "@dhis2/d2-i18n";
import { Button, ButtonStrip, Card, Divider } from "@dhis2/ui";
import { RHFTextInputField } from "@hisptz/dhis2-ui";
import { DataElementConfig } from "./DataElementConfig";

export function EventProgramConfig() {
	const { id: programId } = useParams();
	const navigate = useNavigate();
	const program = useCurrentProgram();
	const defaultValues = useDefaultValue();
	const form = useForm<DataConfigurationForm>({
		defaultValues,
		shouldFocusError: false,
	});
	const { save, loading } = useSaveConfig();
	const onInvalidSubmit = useInvalidFormAlert();

	const onFormSubmit = useCallback(
		async (data: DataConfigurationForm) => {
			const updatedData = {
				...data,
				id: defaultValues?.id ?? uid(),
			};
			await save(updatedData);
			navigate(`/programs/${program.id}`);
		},
		[save],
	);

	if (!program) {
		return null;
	}

	return (
		<div style={{ paddingBottom: 64 }} className="h-100 w-100 column p-16">
			<h1>
				{i18n.t("Data profile for program {{program}}", {
					program: program.displayName,
				})}
			</h1>
			<div style={{ maxWidth: 1080, width: "100%", alignSelf: "center" }}>
				<FormProvider {...form}>
					<div className="column gap-16">
						<Card>
							<div className="p-16">
								<div className="column">
									<h3 style={{ margin: 0 }}>
										{i18n.t("General")}
									</h3>
									<Divider />
								</div>
								<div className="column gap-16">
									<RHFTextInputField
										label={i18n.t("Name")}
										name="name"
										type="text"
										required
										validations={{
											required:
												i18n.t("Name is required"),
										}}
									/>
								</div>
							</div>
						</Card>
						<Card>
							<div className="p-16 column gap-16">
								<div>
									<h3
										style={{
											margin: 0,
										}}
									>
										{i18n.t("Data Elements")}
									</h3>
									<Divider />
								</div>
								<DataElementConfig />
							</div>
						</Card>
						<div style={{ paddingBottom: 64 }} className="">
							<ButtonStrip>
								<Button onClick={() => navigate(`/programs/${program.id}`)}>
									{i18n.t("Cancel")}
								</Button>
								<Button
									loading={loading}
									onClick={() =>
										form.handleSubmit(
											onFormSubmit,
											onInvalidSubmit,
										)()
									}
									primary
								>
									{!loading
										? i18n.t("Save")
										: i18n.t("Saving...")}
								</Button>
							</ButtonStrip>
						</div>
					</div>
				</FormProvider>
			</div>
		</div>
	);
}

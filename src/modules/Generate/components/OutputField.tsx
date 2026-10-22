import React, { useState } from "react";
import { Controller, useWatch } from "react-hook-form";
import { Button, Checkbox, Field, IconChevronDown16, IconChevronUp16, Radio } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { OutputType } from "../interfaces";
import styles from "./OutputField.module.css";

export function OutputField() {
	const output = useWatch({ name: "output" }) as OutputType;
	const skipRuleEngine = useWatch({ name: "skipRuleEngine" }) as boolean;
	const [showAdvanced, setShowAdvanced] = useState(skipRuleEngine);

	return (
		<div className={styles.container}>
			<Controller
				name="output"
				render={({ field }) => (
					<Field label={i18n.t("What should happen with the data?")}>
						<div className={styles.radios}>
							<Radio
								dense
								name="output"
								value="upload"
								label={i18n.t("Upload to DHIS2")}
								checked={field.value === "upload"}
								onChange={() => field.onChange("upload")}
							/>
							<Radio
								dense
								name="output"
								value="download"
								label={i18n.t("Download JSON only")}
								checked={field.value === "download"}
								onChange={() => field.onChange("download")}
							/>
						</div>
					</Field>
				)}
			/>
			{output === "upload" && (
				<div className={styles.advanced}>
					<Button
						small
						secondary
						icon={showAdvanced ? <IconChevronUp16 /> : <IconChevronDown16 />}
						onClick={() => setShowAdvanced((current) => !current)}
					>
						{i18n.t("Advanced options")}
					</Button>
					{showAdvanced && (
						<Controller
							name="skipRuleEngine"
							render={({ field }) => (
								<div className={styles.option}>
									<Checkbox
										dense
										label={i18n.t("Skip program rules")}
										checked={!!field.value}
										onChange={({ checked }) => field.onChange(checked)}
									/>
									<p className={styles.help}>
										{i18n.t(
											"Uploads faster, but values assigned by program rules aren't set and rule validations don't run.",
										)}
									</p>
								</div>
							)}
						/>
					)}
				</div>
			)}
		</div>
	);
}

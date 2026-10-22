import { CircularLoader } from "@dhis2/ui";
import React from "react";
import styles from "./FullPageLoader.module.css";

export function FullPageLoader() {
	return (
		<div className={styles.container}>
			<CircularLoader small />
		</div>
	);
}

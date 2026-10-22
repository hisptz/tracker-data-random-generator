import React, { ReactNode } from "react";
import styles from "./FormSection.module.css";

export interface FormSectionProps {
	title: string;
	description?: ReactNode;
	children: ReactNode;
}

export function FormSection({ title, description, children }: FormSectionProps) {
	return (
		<section className={styles.section}>
			<div className={styles.header}>
				<h2 className={styles.title}>{title}</h2>
				{description && <p className={styles.description}>{description}</p>}
			</div>
			<div className={styles.body}>{children}</div>
		</section>
	);
}

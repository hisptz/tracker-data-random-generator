import React, { ReactNode } from "react";
import styles from "./EmptyState.module.css";

export interface EmptyStateProps {
	title: string;
	description?: ReactNode;
	action?: ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{title}</h2>
			{description && <p className={styles.description}>{description}</p>}
			{action && <div className={styles.action}>{action}</div>}
		</div>
	);
}

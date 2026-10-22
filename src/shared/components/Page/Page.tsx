import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import i18n from "@dhis2/d2-i18n";
import cx from "classnames";
import styles from "./Page.module.css";

export interface Breadcrumb {
	label: string;
	to?: string;
}

export interface PageProps {
	title: ReactNode;
	breadcrumbs?: Breadcrumb[];
	// Short line under the title, such as the program type and size
	description?: ReactNode;
	actions?: ReactNode;
	// Narrow pages are used for single column forms
	width?: "narrow" | "regular" | "wide";
	children: ReactNode;
}

export function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
	return (
		<nav aria-label={i18n.t("Breadcrumb")}>
			<ol className={styles.breadcrumbs}>
				{items.map(({ label, to }, index) => {
					const isLast = index === items.length - 1;
					return (
						<li key={`${label}-${index}`} className={styles.crumb}>
							{to && !isLast ? (
								<Link to={to}>{label}</Link>
							) : (
								<span aria-current={isLast ? "page" : undefined}>
									{label}
								</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}

export function Page({
	title,
	breadcrumbs,
	description,
	actions,
	width = "regular",
	children,
}: PageProps) {
	return (
		<div className={cx(styles.page, styles[width])}>
			{breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
			<header className={styles.header}>
				<div className={styles.heading}>
					<h1 className={styles.title}>{title}</h1>
					{description && (
						<div className={styles.description}>{description}</div>
					)}
				</div>
				{actions && <div className={styles.actions}>{actions}</div>}
			</header>
			{children}
		</div>
	);
}

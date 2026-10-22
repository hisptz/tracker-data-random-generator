import React, { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import { CircularLoader, Input, NoticeBox } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import cx from "classnames";
import { usePrograms } from "../../hooks/programs";
import styles from "./ProgramSidebar.module.css";

export interface ProgramSidebarProps {
	className?: string;
	onNavigate?: () => void;
}

export function ProgramSidebar({ className, onNavigate }: ProgramSidebarProps) {
	const { data: programs, isLoading, error } = usePrograms();
	const [keyword, setKeyword] = useState("");

	const filteredPrograms = useMemo(() => {
		const search = keyword.trim().toLowerCase();
		if (!search) {
			return programs ?? [];
		}
		return (programs ?? []).filter(({ displayName }) =>
			displayName.toLowerCase().includes(search),
		);
	}, [programs, keyword]);

	return (
		<nav
			className={cx(styles.sidebar, className)}
			aria-label={i18n.t("Programs")}
		>
			<div className={styles.header}>
				<h2 className={styles.title}>{i18n.t("Programs")}</h2>
				<Input
					dense
					type="search"
					name="program-filter"
					placeholder={i18n.t("Filter programs")}
					value={keyword}
					onChange={({ value }) => setKeyword(value ?? "")}
				/>
			</div>
			{isLoading && (
				<div className={styles.message}>
					<CircularLoader small />
				</div>
			)}
			{!!error && (
				<div className={styles.message}>
					<NoticeBox error title={i18n.t("Could not load programs")}>
						{error instanceof Error ? error.message : ""}
					</NoticeBox>
				</div>
			)}
			{!isLoading && !error && (
				<ul className={styles.list}>
					{filteredPrograms.map(({ id, displayName, registration }) => (
						<li key={id}>
							<NavLink
								to={`/programs/${id}`}
								onClick={onNavigate}
								className={({ isActive }) =>
									cx(styles.link, { [styles.active]: isActive })
								}
							>
								<span className={styles.name}>{displayName}</span>
								<span className={styles.type}>
									{registration
										? i18n.t("Tracker program")
										: i18n.t("Event program")}
								</span>
							</NavLink>
						</li>
					))}
					{filteredPrograms.length === 0 && (
						<li className={styles.empty}>
							{keyword
								? i18n.t("No programs match \"{{keyword}}\"", {
										keyword,
									})
								: i18n.t("No programs available")}
						</li>
					)}
				</ul>
			)}
		</nav>
	);
}

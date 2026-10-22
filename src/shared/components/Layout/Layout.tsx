import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useMatches } from "react-router-dom";
import { Button, IconChevronDown16 } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import cx from "classnames";
import { ProgramSidebar } from "../ProgramSidebar/ProgramSidebar";
import styles from "./Layout.module.css";

export interface RouteHandle {
	// Full pages (the profile editor and generate page) hide the program sidebar
	fullPage?: boolean;
}

export function Layout() {
	const fullPage = useMatches().some(
		(match) => (match.handle as RouteHandle | undefined)?.fullPage,
	);
	const { pathname } = useLocation();
	const [drawerOpen, setDrawerOpen] = useState(false);

	// The drawer is only used on narrow screens. It closes whenever the page changes.
	useEffect(() => {
		setDrawerOpen(false);
	}, [pathname]);

	useEffect(() => {
		if (!drawerOpen) {
			return;
		}
		const onKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setDrawerOpen(false);
			}
		};
		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [drawerOpen]);

	return (
		<div className={cx(styles.wrapper, { [styles.fullPage]: fullPage })}>
			{!fullPage && (
				<>
					<div className={styles.mobileBar}>
						<Button
							small
							icon={<IconChevronDown16 />}
							onClick={() => setDrawerOpen(true)}
						>
							{i18n.t("Programs")}
						</Button>
					</div>
					{drawerOpen && (
						<div
							className={styles.backdrop}
							onClick={() => setDrawerOpen(false)}
						/>
					)}
					<ProgramSidebar
						className={cx(styles.sidebar, {
							[styles.sidebarOpen]: drawerOpen,
						})}
						onNavigate={() => setDrawerOpen(false)}
					/>
				</>
			)}
			<main className={styles.main}>
				<Outlet />
			</main>
		</div>
	);
}

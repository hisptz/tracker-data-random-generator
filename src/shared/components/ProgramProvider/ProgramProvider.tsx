import React, { createContext, ReactNode, useContext } from "react";
import { NoticeBox } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { useProgram } from "../../hooks/programs";
import { ProgramMetadata } from "../../interfaces/program";
import { FullPageLoader } from "../FullPageLoader/FullPageLoader";
import styles from "./ProgramProvider.module.css";

const ProgramContext = createContext<ProgramMetadata | null>(null);

/*
 * Loads the program once and makes it available to everything under the program routes, so pages
 * can use the program without handling loading and errors themselves.
 */
export function ProgramProvider({
	programId,
	children,
}: {
	programId: string;
	children: ReactNode;
}) {
	const { data: program, isLoading, error } = useProgram(programId);

	if (isLoading) {
		return <FullPageLoader />;
	}

	if (error || !program) {
		return (
			<div className={styles.error}>
				<NoticeBox error title={i18n.t("Could not load the program")}>
					{error instanceof Error
						? error.message
						: i18n.t(
								"The program may have been deleted, or you may not have access to it.",
							)}
				</NoticeBox>
			</div>
		);
	}

	return (
		<ProgramContext.Provider value={program}>
			{children}
		</ProgramContext.Provider>
	);
}

export function useCurrentProgram(): ProgramMetadata {
	const program = useContext(ProgramContext);
	if (!program) {
		throw new Error("useCurrentProgram must be used inside ProgramProvider");
	}
	return program;
}

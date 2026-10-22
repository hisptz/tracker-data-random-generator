import { useDataEngine } from "@dhis2/app-runtime";
import { Program } from "@hisptz/dhis2-utils";

export type DataEngine = ReturnType<typeof useDataEngine>;

export interface ProgramSummary {
	id: string;
	displayName: string;
	registration: boolean;
}

export interface ProgramOrgUnit {
	id: string;
	name: string;
	displayName?: string;
	code?: string;
	path: string;
}

/*
 * The program as returned by the program query. Profiles are configured and generated against this.
 */
export interface ProgramMetadata extends Program {
	displayName: string;
	registration: boolean;
	organisationUnits: ProgramOrgUnit[];
}

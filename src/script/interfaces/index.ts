import { DHIS2ValueType } from "@hisptz/dhis2-utils";
import { OrgUnit } from "@hisptz/dhis2-ui/build/types/components/selectors/OrgUnitSelector/types";

export interface SupportedParam {
	type:
		| "number"
		| "text"
		| "options"
		| "date"
		| "time"
		| "datetime-local"
		| "default"
		| "object"
		| "boolean"
		| "coordinates";
	label: string;
	keys?: Array<SupportedParam & { key: string }>;
	options?: { name: string; value: any }[];
	fieldProps?: Record<string, any>;
	// For object keys: only show this field when a sibling key has the given value(s)
	showWhen?: { key: string; values: any[] };
}

export interface DataType {
	name: string;
	fn: any;
	dhis2Fields: DHIS2ValueType[];
	defaultParams?: any[];
	supportedParams?: SupportedParam[];
}

export interface DataItemConfig {
	dataItemId: string;
	dataTypeName: string;
	options?: {
		deps?: Record<string, any>;
		probability?: number;
		params?: any[];
	};
}

export interface TimeBoundary {
	min?: string;
	max?: string;
}

export interface GenerateProps {
	count: number;
}

export interface GenerateWithPaginationProps {
	pages: number;
	pageSize?: number;
}

export interface DataConfigurationForm {
	name: string;
	id: string;
	attributes?: DataItemConfig[];
	programStages?: {
		id: string;
		dataElements: DataItemConfig[];
	}[];
}

export interface EventDataConfigurationForm {
	name: string;
	id: string;
	dataElements: DataItemConfig[];
}

export interface EventProgramDataConfiguration {
	id: string;
	count?: number;
	dataElements: DataItemConfig[];
	name: string;
	meta: {
		orgUnits?: OrgUnit[];
		locale?: string;
		eventTimeBoundary: TimeBoundary;
	};
}

/*
 * Payload shapes accepted by the tracker importer (POST /api/tracker).
 * See dhis-web-api .../webapi/controller/tracker/view/*.java
 */
export interface TrackerDataValue {
	dataElement: string;
	value: string;
}

export interface TrackerAttributeValue {
	attribute: string;
	value: string;
}

export interface TrackerEvent {
	event: string;
	program: string;
	programStage: string;
	orgUnit: string;
	occurredAt: string;
	status: "ACTIVE" | "COMPLETED";
	completedAt?: string;
	enrollment?: string;
	trackedEntity?: string;
	dataValues: TrackerDataValue[];
}

export interface TrackerEnrollment {
	enrollment: string;
	trackedEntity: string;
	program: string;
	orgUnit: string;
	status: "ACTIVE" | "COMPLETED";
	enrolledAt: string;
	occurredAt: string;
}

export interface TrackerTrackedEntity {
	trackedEntity: string;
	trackedEntityType: string;
	orgUnit: string;
	attributes: TrackerAttributeValue[];
}

/*
 * Flat tracker import payload. Enrollments reference their tracked entity and events reference
 * their enrollment (and tracked entity) by UID instead of being nested.
 */
export interface TrackerPayload {
	trackedEntities: TrackerTrackedEntity[];
	enrollments: TrackerEnrollment[];
	events: TrackerEvent[];
}

export interface DataConfiguration {
	name: string;
	id: string;
	meta: {
		orgUnits?: OrgUnit[];
		trackedEntityType?: string;
		enrollmentTimeBoundary?: TimeBoundary;
		eventTimeBoundary?: TimeBoundary;
		locale?: string;
	};
	attributes?: DataItemConfig[];
	programStages?: {
		id: string;
		count?: number;
		dataElements: DataItemConfig[];
		eventTimeBoundary?: TimeBoundary;
	}[];
}

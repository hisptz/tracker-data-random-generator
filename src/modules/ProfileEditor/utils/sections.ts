import i18n from "@dhis2/d2-i18n";
import { find, head } from "lodash";
import { ProgramMetadata } from "../../../shared/interfaces/program";
import { Profile } from "../../../shared/hooks/profiles";
import {
	DataConfigurationForm,
	DataItemConfig,
	EventDataConfigurationForm,
} from "../../../script/interfaces";
import { DataItem, getSupportedGenerators } from "./generators";

export interface ConfigurableField {
	dataItem: DataItem;
	label: string;
	required: boolean;
	// Form path of the field's DataItemConfig, for example "programStages.1.dataElements.4"
	path: string;
}

export interface ProfileSection {
	key: string;
	label: string;
	// Form path that holds every value of this section, used to count its errors
	path: string;
	fields: ConfigurableField[];
	// Set for program stages of tracker programs
	stage?: { path: string; repeatable: boolean };
}

export interface ProfileFormValues {
	id?: string;
	name: string;
	attributes?: DataItemConfig[];
	programStages?: {
		id: string;
		count?: number | string;
		dataElements: DataItemConfig[];
	}[];
	dataElements?: DataItemConfig[];
}

export const GENERAL_SECTION_KEY = "general";

function getLabel(dataItem: DataItem): string {
	return dataItem.formName ?? dataItem.name ?? dataItem.id;
}

function getProgramAttributes(program: ProgramMetadata) {
	return (program.programTrackedEntityAttributes ?? []).map(
		({ trackedEntityAttribute, mandatory }) => ({
			dataItem: trackedEntityAttribute,
			required: !!mandatory,
		}),
	);
}

function getStageDataElements(
	stage: NonNullable<ProgramMetadata["programStages"]>[number],
) {
	return (stage.programStageDataElements ?? []).map(
		({ dataElement, compulsory }) => ({
			dataItem: dataElement,
			required: !!compulsory,
		}),
	);
}

/*
 * The editor's sections. Tracker programs have attributes and one section per stage; event programs
 * only have the data elements of their single stage.
 */
export function getProfileSections(program: ProgramMetadata): ProfileSection[] {
	if (!program.registration) {
		const stage = head(program.programStages);
		return [
			{
				key: "dataElements",
				label: i18n.t("Data elements"),
				path: "dataElements",
				fields: (stage ? getStageDataElements(stage) : []).map(
					({ dataItem, required }, index) => ({
						dataItem,
						required,
						label: getLabel(dataItem),
						path: `dataElements.${index}`,
					}),
				),
			},
		];
	}

	return [
		{
			key: "attributes",
			label: i18n.t("Tracked entity attributes"),
			path: "attributes",
			fields: getProgramAttributes(program).map(
				({ dataItem, required }, index) => ({
					dataItem,
					required,
					label: getLabel(dataItem),
					path: `attributes.${index}`,
				}),
			),
		},
		...(program.programStages ?? []).map((stage, stageIndex) => ({
			key: `stage-${stage.id}`,
			label: stage.displayName ?? stage.name ?? stage.id,
			path: `programStages.${stageIndex}`,
			stage: {
				path: `programStages.${stageIndex}`,
				repeatable: !!stage.repeatable,
			},
			fields: getStageDataElements(stage).map(
				({ dataItem, required }, index) => ({
					dataItem,
					required,
					label: getLabel(dataItem),
					path: `programStages.${stageIndex}.dataElements.${index}`,
				}),
			),
		})),
	];
}

/*
 * Builds the config of one field. A saved config is matched by data item, and a field with only one
 * possible generator always uses it.
 */
function getFieldValue(
	dataItem: DataItem,
	savedConfigs?: DataItemConfig[],
	suggest?: (dataItem: DataItem) => DataItemConfig | undefined,
): DataItemConfig {
	const saved = find(savedConfigs ?? [], ["dataItemId", dataItem.id]);
	const generators = getSupportedGenerators(dataItem);
	const base: DataItemConfig = saved
		? { ...saved }
		: (suggest?.(dataItem) ?? { dataItemId: dataItem.id, dataTypeName: "" });

	return {
		...base,
		dataItemId: dataItem.id,
		...(generators.length === 1
			? { dataTypeName: generators[0].name }
			: {}),
	};
}

/*
 * Form values for the editor. Existing profiles keep their saved values (and any other saved keys);
 * `suggest` fills in fields that have no saved config yet.
 */
export function getProfileFormValues(
	program: ProgramMetadata,
	profile?: Profile,
	suggest?: (dataItem: DataItem) => DataItemConfig | undefined,
): ProfileFormValues {
	if (!program.registration) {
		const eventProfile = profile as EventDataConfigurationForm | undefined;
		const stage = head(program.programStages);
		return {
			...(eventProfile ?? {}),
			name: eventProfile?.name ?? "",
			dataElements: (stage ? getStageDataElements(stage) : []).map(
				({ dataItem }) =>
					getFieldValue(dataItem, eventProfile?.dataElements, suggest),
			),
		};
	}

	const trackerProfile = profile as DataConfigurationForm | undefined;
	return {
		...(trackerProfile ?? {}),
		name: trackerProfile?.name ?? "",
		attributes: getProgramAttributes(program).map(({ dataItem }) =>
			getFieldValue(dataItem, trackerProfile?.attributes, suggest),
		),
		programStages: (program.programStages ?? []).map((stage) => {
			const savedStage = find(trackerProfile?.programStages ?? [], [
				"id",
				stage.id,
			]) as NonNullable<ProfileFormValues["programStages"]>[number] | undefined;
			return {
				...(savedStage ?? {}),
				id: stage.id,
				dataElements: getStageDataElements(stage).map(({ dataItem }) =>
					getFieldValue(dataItem, savedStage?.dataElements, suggest),
				),
			};
		}),
	};
}

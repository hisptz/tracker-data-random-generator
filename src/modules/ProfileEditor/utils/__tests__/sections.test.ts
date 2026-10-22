import { describe, expect, it } from "@jest/globals";
import { SupportedDataTypeNames } from "../../../../script/constants/dataTypes";
import { ProgramMetadata } from "../../../../shared/interfaces/program";
import { getProfileFormValues, getProfileSections } from "../sections";
import { getSuggestedConfig } from "../suggestions";

const trackerProgram = {
	id: "program",
	displayName: "Case surveillance",
	registration: true,
	organisationUnits: [],
	programTrackedEntityAttributes: [
		{
			mandatory: true,
			trackedEntityAttribute: { id: "first", name: "First name", valueType: "TEXT" },
		},
		{
			mandatory: false,
			trackedEntityAttribute: { id: "dob", name: "Date of birth", valueType: "DATE" },
		},
	],
	programStages: [
		{
			id: "stage",
			displayName: "Follow-up",
			repeatable: true,
			programStageDataElements: [
				{
					compulsory: false,
					dataElement: { id: "weight", name: "Weight", valueType: "NUMBER" },
				},
			],
		},
	],
} as unknown as ProgramMetadata;

const eventProgram = {
	id: "event-program",
	displayName: "Inpatient morbidity",
	registration: false,
	organisationUnits: [],
	programStages: [
		{
			id: "event-stage",
			programStageDataElements: [
				{
					compulsory: true,
					dataElement: { id: "diagnosis", name: "Diagnosis", valueType: "TEXT" },
				},
			],
		},
	],
} as unknown as ProgramMetadata;

describe("getProfileSections", () => {
	it("creates an attributes section and one section per stage for tracker programs", () => {
		const sections = getProfileSections(trackerProgram);
		expect(sections.map(({ key }) => key)).toEqual(["attributes", "stage-stage"]);
		expect(sections[0].fields.map(({ path, required }) => [path, required])).toEqual([
			["attributes.0", true],
			["attributes.1", false],
		]);
		expect(sections[1].stage).toEqual({ path: "programStages.0", repeatable: true });
		expect(sections[1].fields[0].path).toBe("programStages.0.dataElements.0");
	});

	it("creates one data element section for event programs", () => {
		const sections = getProfileSections(eventProgram);
		expect(sections).toHaveLength(1);
		expect(sections[0].fields[0]).toMatchObject({
			path: "dataElements.0",
			required: true,
			label: "Diagnosis",
		});
	});
});

describe("getProfileFormValues", () => {
	it("keeps saved values and matches them by data item, not position", () => {
		const values = getProfileFormValues(trackerProgram, {
			id: "profile",
			name: "Saved",
			// Saved in the opposite order to the program's attributes
			attributes: [
				{ dataItemId: "dob", dataTypeName: SupportedDataTypeNames.RECENT },
				{ dataItemId: "first", dataTypeName: SupportedDataTypeNames.FULL_NAME },
			],
			programStages: [
				{
					id: "stage",
					count: 3,
					dataElements: [
						{
							dataItemId: "weight",
							dataTypeName: SupportedDataTypeNames.NUMBER,
							options: { params: [{ min: 2, max: 9 }] },
						},
					],
				},
			],
		});

		expect(values.id).toBe("profile");
		expect(values.name).toBe("Saved");
		expect(values.attributes).toEqual([
			{ dataItemId: "first", dataTypeName: SupportedDataTypeNames.FULL_NAME },
			{ dataItemId: "dob", dataTypeName: SupportedDataTypeNames.RECENT },
		]);
		expect(values.programStages).toEqual([
			{
				id: "stage",
				count: 3,
				dataElements: [
					{
						dataItemId: "weight",
						dataTypeName: SupportedDataTypeNames.NUMBER,
						options: { params: [{ min: 2, max: 9 }] },
					},
				],
			},
		]);
	});

	it("never applies suggestions to fields that already have a saved config", () => {
		const values = getProfileFormValues(
			trackerProgram,
			{
				id: "profile",
				name: "Saved",
				attributes: [{ dataItemId: "first", dataTypeName: "" }],
			},
			getSuggestedConfig,
		);
		expect(values.attributes?.[0]).toEqual({ dataItemId: "first", dataTypeName: "" });
	});

	it("fills new profiles with suggestions", () => {
		const values = getProfileFormValues(trackerProgram, undefined, getSuggestedConfig);
		expect(values.name).toBe("");
		expect(values.attributes?.map(({ dataTypeName }) => dataTypeName)).toEqual([
			SupportedDataTypeNames.FIRST_NAME,
			SupportedDataTypeNames.DATE_OF_BIRTH,
		]);
		expect(values.programStages?.[0].dataElements[0].dataTypeName).toBe(
			SupportedDataTypeNames.NUMBER,
		);
	});

	it("leaves fields empty without suggestions", () => {
		const values = getProfileFormValues(eventProgram);
		expect(values.dataElements).toEqual([{ dataItemId: "diagnosis", dataTypeName: "" }]);
	});
});

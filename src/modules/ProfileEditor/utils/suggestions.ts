import { SupportedDataTypeNames } from "../../../script/constants/dataTypes";
import { DataItemConfig } from "../../../script/interfaces";
import { DataItem, getSupportedGenerators } from "./generators";

type Suggestion = Pick<DataItemConfig, "dataTypeName" | "options">;

// Checked in order, so more specific names come first ("phone number" before "number")
const NAME_RULES: Array<{ pattern: RegExp; generator: string }> = [
	{
		pattern: /\b(first|given|fore)\s*name\b|\bforename\b/,
		generator: SupportedDataTypeNames.FIRST_NAME,
	},
	{ pattern: /\bmiddle\s*name\b/, generator: SupportedDataTypeNames.MIDDLE_NAME },
	{
		pattern: /\b(last|family|sur)\s*name\b|\bsurname\b/,
		generator: SupportedDataTypeNames.LAST_NAME,
	},
	{ pattern: /\be-?mail\b/, generator: SupportedDataTypeNames.EMAIL },
	{
		pattern: /\b(phone|mobile|telephone|cell)\b/,
		generator: SupportedDataTypeNames.PHONE_NUMBER,
	},
	{ pattern: /\b(sex|gender)\b/, generator: SupportedDataTypeNames.SEX },
	{
		pattern: /\b(date of birth|birth\s*date|dob)\b/,
		generator: SupportedDataTypeNames.DATE_OF_BIRTH,
	},
	{
		pattern: /\b(address|street|village|residence)\b/,
		generator: SupportedDataTypeNames.PHYSICAL_ADDRESS,
	},
	{ pattern: /\b(city|town)\b/, generator: SupportedDataTypeNames.CITY },
	{ pattern: /\bcountry\b/, generator: SupportedDataTypeNames.COUNTRY },
	{
		// Only names of people; "Facility name" and similar fall through to the value type default
		pattern:
			/\bfull\s*name\b|^name$|\b(patient|client|person|child|mother|father)\s*name\b/,
		generator: SupportedDataTypeNames.FULL_NAME,
	},
	{
		pattern: /\b(id|identifier|code|number)\b/,
		generator: SupportedDataTypeNames.ID,
	},
	{
		pattern: /\b(comment|comments|note|notes|remark|remarks|description)\b/,
		generator: SupportedDataTypeNames.LONG_TEXT,
	},
];

// Used when the name gives no hint. Dates default to the past because most recorded dates are.
const VALUE_TYPE_DEFAULTS: Record<string, string> = {
	TEXT: SupportedDataTypeNames.RANDOM_WORDS,
	LONG_TEXT: SupportedDataTypeNames.LONG_TEXT,
	NUMBER: SupportedDataTypeNames.NUMBER,
	INTEGER: SupportedDataTypeNames.POSITIVE_NUMBER,
	INTEGER_POSITIVE: SupportedDataTypeNames.POSITIVE_NUMBER,
	INTEGER_ZERO_OR_POSITIVE: SupportedDataTypeNames.POSITIVE_NUMBER,
	BOOLEAN: SupportedDataTypeNames.BOOLEAN,
	TRUE_ONLY: SupportedDataTypeNames.TRUE_ONLY,
	DATE: SupportedDataTypeNames.PAST_DATE,
	DATETIME: SupportedDataTypeNames.DATE_TIME,
	TIME: SupportedDataTypeNames.TIME,
	PHONE_NUMBER: SupportedDataTypeNames.PHONE_NUMBER,
	COORDINATE: SupportedDataTypeNames.COORDINATES,
};

/*
 * Settings that keep suggested values realistic. Without them numbers can be as large as 2^53
 * (more than DHIS2 accepts for integers) and IDs are a single character.
 */
function getSuggestedOptions(
	generator: string,
	valueType?: string,
): DataItemConfig["options"] | undefined {
	switch (generator) {
		case SupportedDataTypeNames.NUMBER:
		case SupportedDataTypeNames.POSITIVE_NUMBER:
			return {
				params: [{ min: valueType === "INTEGER_POSITIVE" ? 1 : 0, max: 100 }],
			};
		case SupportedDataTypeNames.ID:
			return { params: [10] };
		default:
			return undefined;
	}
}

function getLabel(dataItem: DataItem): string {
	return (dataItem.formName ?? dataItem.name ?? "").toLowerCase();
}

/*
 * Picks a generator for a field from its option set, name and value type. Returns undefined when
 * no generator supports the field.
 */
export function suggestGenerator(dataItem: DataItem): Suggestion | undefined {
	const supported = getSupportedGenerators(dataItem).map(({ name }) => name);
	if (supported.length === 0) {
		return undefined;
	}

	if (dataItem.optionSet) {
		return {
			dataTypeName: SupportedDataTypeNames.OPTIONS,
			options: {
				params: [
					(dataItem.optionSet.options ?? []).map(({ code }) => code),
				],
			},
		};
	}

	const label = getLabel(dataItem);
	const byName = NAME_RULES.find(
		({ pattern, generator }) =>
			supported.includes(generator) && pattern.test(label),
	)?.generator;
	const byValueType = dataItem.valueType
		? VALUE_TYPE_DEFAULTS[dataItem.valueType]
		: undefined;
	const generator =
		byName ??
		(byValueType && supported.includes(byValueType)
			? byValueType
			: supported[0]);

	const options = getSuggestedOptions(generator, dataItem.valueType);
	return { dataTypeName: generator, ...(options ? { options } : {}) };
}

export function getSuggestedConfig(dataItem: DataItem): DataItemConfig | undefined {
	const suggestion = suggestGenerator(dataItem);
	return suggestion ? { dataItemId: dataItem.id, ...suggestion } : undefined;
}

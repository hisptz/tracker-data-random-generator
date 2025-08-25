import { z } from "zod";

export enum supportedParamType {
	options = "options",
	object = "object",
	boolean = "boolean",
	text = "text",
	number = "number",
	date = "date",
	default = "default",
	coordinates = "coordinates",
}

export const baseSupportedParamConfigSchema = z.object({
	type: z.enum(supportedParamType),
});

export const objectSupportedParamConfigSchema = z.object({
	type: z.literal(supportedParamType.object),
	keys: z.array(
		baseSupportedParamConfigSchema.extend({
			key: z.string(),
		}),
	),
});

export const optionsSupportedParamConfigSchema = z.object({
	type: z.literal(supportedParamType.options),
	options: z.array(
		z.object({
			name: z.string(),
			value: z.string(),
		}),
	),
});

export const supportedParamConfigSchema = z.discriminatedUnion("type", [
	optionsSupportedParamConfigSchema,
	baseSupportedParamConfigSchema,
	objectSupportedParamConfigSchema,
]);

export const dataTypeSchema = z.object({
	name: z.string(),
	supportedParams: z.array(supportedParamConfigSchema),
	dhis2Fields: z.array(z.string()),
	defaultParams: z.array(z.unknown()),
});

import { useAlert, useDataMutation } from "@dhis2/app-runtime";
import { useCallback } from "react";
import { chunk, snakeCase } from "lodash";
import { asyncify, mapSeries } from "async-es";
import i18n from "@dhis2/d2-i18n";
import { Event, TrackedEntityInstance } from "@hisptz/dhis2-utils";

export const generateUploadMutation = (
	type: "events" | "trackedEntityInstances",
) => {
	return {
		type: "create",
		resource: type,
		data: ({ data }: any) => data,
	} as any;
};

export function useUploadData(type: "events" | "trackedEntityInstances") {
	const [upload, { loading, error }] = useDataMutation(
		generateUploadMutation(type),
	);
	const { show } = useAlert(
		({ message }) => message,
		({ type }) => ({ ...type, duration: 3000 }),
	);

	const uploadData = useCallback(
		async (data: Array<Event | TrackedEntityInstance>) => {
			const dataChunks = chunk(data, 50);

			const responses = await mapSeries(
				dataChunks,
				asyncify(async (data: any) => {
					return await upload({
						data: {
							[type]: data,
						},
					});
				}),
			);
			//TODO: better handle the responses to have a summary of how much data has been uploaded

			const count = data.length;
			const entityName = `${snakeCase(type).replaceAll("_", " ")}`;
			show({
				message: i18n.t(
					"Uploaded {{count}} {{entityName}} successfully",
					{
						count,
						entityName,
					},
				),
				type: { success: true },
			});
		},
		[upload],
	);

	return {
		loading,
		uploadData,
		error,
	};
}

import { describe, expect, it } from "@jest/globals";
import { getOrgUnitTreeConfig } from "../orgUnits";

function orgUnit(path: string) {
	const id = path.split("/").pop() as string;
	return { id, name: id, path };
}

describe("getOrgUnitTreeConfig", () => {
	it("roots the tree at the lowest common ancestor", () => {
		const config = getOrgUnitTreeConfig([
			orgUnit("/country/region/districtA/facility1"),
			orgUnit("/country/region/districtB/facility2"),
		]);
		expect(config.roots).toEqual(["region"]);
		expect(config.initiallyExpanded).toEqual(["/region"]);
		expect(config.pathById).toEqual({
			facility1: "/region/districtA/facility1",
			facility2: "/region/districtB/facility2",
		});
		expect(config.idByPath["/region/districtB/facility2"]).toBe("facility2");
	});

	it("uses the unit itself as the root when only one is assigned", () => {
		const config = getOrgUnitTreeConfig([orgUnit("/country/region/district")]);
		expect(config.roots).toEqual(["district"]);
		expect(config.pathById).toEqual({ district: "/district" });
	});

	it("keeps an assigned ancestor as the root", () => {
		const config = getOrgUnitTreeConfig([
			orgUnit("/country/region"),
			orgUnit("/country/region/district"),
		]);
		expect(config.roots).toEqual(["region"]);
		expect(config.pathById).toEqual({
			region: "/region",
			district: "/region/district",
		});
	});

	it("creates one root per top level hierarchy", () => {
		const config = getOrgUnitTreeConfig([
			orgUnit("/countryA/region1/district1"),
			orgUnit("/countryA/region2/district2"),
			orgUnit("/countryB/region3"),
		]);
		expect(config.roots).toEqual(["countryA", "region3"]);
		expect(config.pathById.district2).toBe("/countryA/region2/district2");
		expect(config.pathById.region3).toBe("/region3");
	});

	it("ignores units without a path", () => {
		const config = getOrgUnitTreeConfig([
			{ id: "unknown", name: "Unknown", path: "" },
		]);
		expect(config.roots).toEqual([]);
		expect(config.pathById).toEqual({});
	});
});

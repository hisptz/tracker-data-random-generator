import { ProgramOrgUnit } from "../../../shared/interfaces/program";

export interface OrgUnitTreeConfig {
	roots: string[];
	// Paths as the tree uses them: trimmed to start at their root, for example "/district/facility"
	pathById: Record<string, string>;
	idByPath: Record<string, string>;
	// The roots' own paths, so the first level below each root is visible straight away
	initiallyExpanded: string[];
}

function getSegments(path: string): string[] {
	return path.split("/").filter(Boolean);
}

function getCommonPrefix(paths: string[][]): string[] {
	const [first, ...rest] = paths;
	const prefix: string[] = [];
	for (let index = 0; index < first.length; index++) {
		const segment = first[index];
		if (rest.some((segments) => segments[index] !== segment)) {
			break;
		}
		prefix.push(segment);
	}
	return prefix;
}

/*
 * Roots the tree at the lowest common ancestor of the program's org units (one root per top level
 * hierarchy), so users don't have to expand levels that only lead to a single branch.
 * OrganisationUnitTree expects every path relative to its root.
 */
export function getOrgUnitTreeConfig(orgUnits: ProgramOrgUnit[]): OrgUnitTreeConfig {
	const withPaths = orgUnits.filter(({ path }) => !!path);
	const groups = new Map<string, string[][]>();
	for (const { path } of withPaths) {
		const segments = getSegments(path);
		const group = groups.get(segments[0]) ?? [];
		group.push(segments);
		groups.set(segments[0], group);
	}

	const roots: string[] = [];
	const rootIndexByTopLevel = new Map<string, number>();
	groups.forEach((paths, topLevel) => {
		const prefix = getCommonPrefix(paths);
		roots.push(prefix[prefix.length - 1]);
		rootIndexByTopLevel.set(topLevel, prefix.length - 1);
	});

	const pathById: Record<string, string> = {};
	const idByPath: Record<string, string> = {};
	for (const { id, path } of withPaths) {
		const segments = getSegments(path);
		const rootIndex = rootIndexByTopLevel.get(segments[0]) ?? 0;
		const trimmedPath = `/${segments.slice(rootIndex).join("/")}`;
		pathById[id] = trimmedPath;
		idByPath[trimmedPath] = id;
	}

	return {
		roots,
		pathById,
		idByPath,
		initiallyExpanded: roots.map((root) => `/${root}`),
	};
}

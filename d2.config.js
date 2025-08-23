/** @type {import('@dhis2/cli-app-scripts').D2Config} */
const config = {
	type: "app",
	title: "Random Data Generator",
	name: "dhis2-random-data-generator",
	entryPoints: {
		app: "./src/App.tsx",
	},
};
module.exports = config;

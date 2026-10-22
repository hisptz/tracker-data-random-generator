import React from "react";
import { MainRouter } from "./modules/Router/Router";
import { DataStoreProvider } from "@dhis2/app-service-datastore";
import { CssVariables } from "@dhis2/ui";
import { FullPageLoader } from "./shared/components/FullPageLoader/FullPageLoader";
import { Helmet } from "react-helmet";
import styles from "./App.module.css";

const MyApp = () => {
	return (
		<>
			<Helmet>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Helmet>
			<CssVariables colors spacers elevations theme />
			<div className={styles.app}>
				<DataStoreProvider
					namespace={"hisptz-tracker-data-generator"}
					loadingComponent={<FullPageLoader />}
				>
					<MainRouter />
				</DataStoreProvider>
			</div>
		</>
	);
};

export default MyApp;

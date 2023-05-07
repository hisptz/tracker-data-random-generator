import React from 'react'
import {MainRouter} from "./modules/Router/Router";
import "./styles/main.css"
import "./styles/common.css"
import {DataStoreProvider} from "@dhis2/app-service-datastore";
import {FullPageLoader} from "./shared/components/FullPageLoader";
import {MutableSnapshot, RecoilRoot} from "recoil";
import {useDataEngine} from "@dhis2/app-runtime";
import {DataEngineState} from "./shared/state/engine";
import {Helmet} from "react-helmet"

const MyApp = () => {
    const engine = useDataEngine();

    function initEngine({set}: MutableSnapshot) {
        set(DataEngineState, engine);
    }

    return (
        <>
            <Helmet>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
            </Helmet>
            <div className="main-container">
                <DataStoreProvider namespace={`hisptz-tracker-data-generator`} loadingComponent={<FullPageLoader/>}>
                    <RecoilRoot initializeState={initEngine}>
                        <MainRouter/>
                    </RecoilRoot>
                </DataStoreProvider>
            </div>
        </>
    )
}

export default MyApp

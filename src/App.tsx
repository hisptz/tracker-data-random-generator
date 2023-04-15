import React from 'react'
import {MainRouter} from "./modules/Router/Router";
import "./styles/main.css"
import "./styles/common.css"
import {DataStoreProvider} from "@dhis2/app-service-datastore";
import {FullPageLoader} from "./shared/components/FullPageLoader";
import {MutableSnapshot, RecoilRoot} from "recoil";
import {useDataEngine} from "@dhis2/app-runtime";
import {DataEngineState} from "./shared/state/engine";

const MyApp = () => {
    const engine = useDataEngine();

    function initEngine({set}: MutableSnapshot) {
        set(DataEngineState, engine);
    }

    return (
        <div className="main-container">
            <DataStoreProvider namespace={`hisptz-tracker-data-generator`} loadingComponent={<FullPageLoader/>}>
                <RecoilRoot initializeState={initEngine}>
                    <MainRouter/>
                </RecoilRoot>
            </DataStoreProvider>
        </div>
    )
}

export default MyApp

import {CircularLoader} from "@dhis2/ui";
import React from "react";


export function FullPageLoader() {


    return (
        <div className="w-100 h-100 center align-center column">
            <CircularLoader small/>
        </div>)
}

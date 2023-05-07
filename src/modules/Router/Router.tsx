import {createHashRouter, Navigate, Outlet, RouteObject, RouterProvider} from "react-router-dom";
import {NavItem} from "./interfaces";
import {MAIN_NAV_ITEMS} from "./constants/nav";
import React, {Suspense} from "react"
import {FullPageLoader} from "../../shared/components/FullPageLoader";

function createRouter(config: NavItem): RouteObject {
    const {path, element, subItems} = config ?? {}
    return {
        path,
        Component: element,
        element: !element ? <Suspense fallback={<FullPageLoader/>}><Outlet/></Suspense> : undefined,
        children: subItems?.map(createRouter),
    }
}

const router = createHashRouter(
    [
        {
            path: "/",
            element: <Navigate to={"/programs"}/>
        },
        ...MAIN_NAV_ITEMS.map(createRouter)
    ]
)

export function MainRouter() {

    return (
        <RouterProvider router={router}/>
    )
}

import {createHashRouter, Navigate, Outlet, RouteObject, RouterProvider} from "react-router-dom";
import {NavItem} from "./interfaces";
import {MAIN_NAV_ITEMS} from "./constants/nav";
import React from "react"

function createRouter(config: NavItem): RouteObject {
    const {path, element, subItems} = config ?? {}
    return {
        path,
        Component: element,
        element: !element ? <Outlet/> : undefined,
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

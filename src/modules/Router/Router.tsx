import React from "react";
import {
	createHashRouter,
	Navigate,
	Outlet,
	RouterProvider,
	useParams,
} from "react-router-dom";
import { Layout, RouteHandle } from "../../shared/components/Layout/Layout";
import { ProgramProvider } from "../../shared/components/ProgramProvider/ProgramProvider";
import { Home } from "../Home/Home";
import { ProgramDataProfiles } from "../ProgramDataProfiles";
import { ProfileEditor } from "../ProfileEditor/ProfileEditor";
import { GeneratePage } from "../Generate/GeneratePage";

const fullPage: RouteHandle = { fullPage: true };

function ProgramRoute() {
	const { id } = useParams();
	// Keyed by program so that switching programs starts every page (and its datastore subscription) fresh
	return (
		<ProgramProvider key={id} programId={id as string}>
			<Outlet />
		</ProgramProvider>
	);
}

// Links saved before the redesign used /programs/:id/config/:configId
function LegacyProfileRedirect() {
	const { configId } = useParams();
	return <Navigate to={`../profiles/${configId}`} replace />;
}

const router = createHashRouter([
	{
		element: <Layout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "programs", element: <Navigate to="/" replace /> },
			{
				path: "programs/:id",
				element: <ProgramRoute />,
				children: [
					{ index: true, element: <ProgramDataProfiles /> },
					{
						path: "profiles/new",
						element: <ProfileEditor />,
						handle: fullPage,
					},
					{
						path: "profiles/:profileId",
						element: <ProfileEditor />,
						handle: fullPage,
					},
					{
						path: "profiles/:profileId/generate",
						element: <GeneratePage />,
						handle: fullPage,
					},
					{
						path: "config",
						element: <Navigate to="../profiles/new" replace />,
					},
					{
						path: "config/:configId",
						element: <LegacyProfileRedirect />,
					},
				],
			},
			{ path: "*", element: <Navigate to="/" replace /> },
		],
	},
]);

export function MainRouter() {
	return <RouterProvider router={router} />;
}

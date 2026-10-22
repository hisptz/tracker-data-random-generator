import { useCallback, useEffect } from "react";
import { useBlocker } from "react-router-dom";

/*
 * Blocks in-app navigation (and warns before closing the tab) while `shouldBlock` is true.
 * Render a confirmation when `isBlocked` is true and call `proceed` or `cancel` from it.
 */
export function useNavigationBlocker(shouldBlock: boolean) {
	const blocker = useBlocker(
		({ currentLocation, nextLocation }) =>
			shouldBlock && currentLocation.pathname !== nextLocation.pathname,
	);

	useEffect(() => {
		if (!shouldBlock) {
			return;
		}
		const onBeforeUnload = (event: BeforeUnloadEvent) => {
			event.preventDefault();
			// Required by some browsers to show the prompt
			event.returnValue = "";
		};
		window.addEventListener("beforeunload", onBeforeUnload);
		return () => window.removeEventListener("beforeunload", onBeforeUnload);
	}, [shouldBlock]);

	const proceed = useCallback(() => {
		if (blocker.state === "blocked") {
			blocker.proceed();
		}
	}, [blocker]);

	const cancel = useCallback(() => {
		if (blocker.state === "blocked") {
			blocker.reset();
		}
	}, [blocker]);

	return { isBlocked: blocker.state === "blocked", proceed, cancel };
}

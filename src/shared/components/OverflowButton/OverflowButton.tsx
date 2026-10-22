import React, { ReactNode, useRef } from "react";
import { Button, IconMore16, Layer, Popper } from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import styles from "./OverflowButton.module.css";

export interface OverflowButtonProps {
	open: boolean;
	onToggle: () => void;
	// Usually a FlyoutMenu
	menu: ReactNode;
	label?: string;
}

// The ⋮ trigger used for row actions. The layer closes the menu on any outside click.
export function OverflowButton({
	open,
	onToggle,
	menu,
	label = i18n.t("More actions"),
}: OverflowButtonProps) {
	const anchorRef = useRef<HTMLDivElement>(null);

	return (
		<div ref={anchorRef} title={label}>
			<Button small secondary icon={<IconMore16 />} onClick={onToggle}>
				{/* Button does not accept aria-label, so the label is kept for screen readers only */}
				<span className={styles.visuallyHidden}>{label}</span>
			</Button>
			{open && (
				<Layer onBackdropClick={onToggle}>
					<Popper reference={anchorRef} placement="bottom-end">
						{menu}
					</Popper>
				</Layer>
			)}
		</div>
	);
}

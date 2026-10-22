import React, { useState } from "react";
import {
	FlyoutMenu,
	IconCopy16,
	IconDelete16,
	IconEdit16,
	MenuItem,
} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { NO_ESCAPE } from "../../../../shared/utils/i18n";
import { OverflowButton } from "../../../../shared/components/OverflowButton/OverflowButton";
import { DeleteProfileModal } from "./DeleteProfileModal";

export interface ProfileActionsMenuProps {
	name: string;
	onEdit: () => void;
	onDuplicate: () => void;
	onDelete: () => Promise<void>;
}

export function ProfileActionsMenu({
	name,
	onEdit,
	onDuplicate,
	onDelete,
}: ProfileActionsMenuProps) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [deleteModalOpen, setDeleteModalOpen] = useState(false);

	const runAndClose = (action: () => void) => () => {
		setMenuOpen(false);
		action();
	};

	return (
		<>
			<OverflowButton
				open={menuOpen}
				onToggle={() => setMenuOpen((open) => !open)}
				label={i18n.t("More actions for {{name}}", {
					name,
					interpolation: NO_ESCAPE,
				})}
				menu={
					<FlyoutMenu dense>
						<MenuItem
							dense
							label={i18n.t("Edit")}
							icon={<IconEdit16 />}
							onClick={runAndClose(onEdit)}
						/>
						<MenuItem
							dense
							label={i18n.t("Duplicate")}
							icon={<IconCopy16 />}
							onClick={runAndClose(onDuplicate)}
						/>
						<MenuItem
							dense
							destructive
							label={i18n.t("Delete profile")}
							icon={<IconDelete16 />}
							onClick={runAndClose(() => setDeleteModalOpen(true))}
						/>
					</FlyoutMenu>
				}
			/>
			{deleteModalOpen && (
				<DeleteProfileModal
					name={name}
					onDelete={onDelete}
					onClose={() => setDeleteModalOpen(false)}
				/>
			)}
		</>
	);
}

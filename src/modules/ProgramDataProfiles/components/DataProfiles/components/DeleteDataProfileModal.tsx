import React, { useCallback, useState } from "react";
import {
	Button,
	ButtonStrip,
	Modal,
	ModalActions,
	ModalContent,
	ModalTitle,
} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { useDeleteDataProfile } from "../hooks/delete";

export interface DeleteDataProfileModalProps {
	profileId: string | null;
	profileName?: string;
	onClose: () => void;
}

export function DeleteDataProfileModal({
	profileId,
	profileName,
	onClose,
}: DeleteDataProfileModalProps) {
	const { deleteProfile } = useDeleteDataProfile();
	const [deleting, setDeleting] = useState(false);

	const onDelete = useCallback(async () => {
		if (!profileId) {
			return;
		}
		setDeleting(true);
		await deleteProfile(profileId);
		setDeleting(false);
		onClose();
	}, [profileId, deleteProfile, onClose]);

	return (
		<Modal position="middle" onClose={onClose} hide={!profileId}>
			<ModalTitle>{i18n.t("Delete data profile")}</ModalTitle>
			<ModalContent>
				{i18n.t(
					"Are you sure you want to delete the data profile {{name}}? This action cannot be undone.",
					{ name: profileName ?? "" },
				)}
			</ModalContent>
			<ModalActions>
				<ButtonStrip>
					<Button disabled={deleting} onClick={onClose}>
						{i18n.t("Cancel")}
					</Button>
					<Button
						destructive
						loading={deleting}
						disabled={deleting}
						onClick={onDelete}
					>
						{deleting ? i18n.t("Deleting...") : i18n.t("Delete")}
					</Button>
				</ButtonStrip>
			</ModalActions>
		</Modal>
	);
}

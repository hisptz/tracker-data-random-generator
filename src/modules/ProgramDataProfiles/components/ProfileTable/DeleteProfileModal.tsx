import React, { useEffect, useRef, useState } from "react";
import {
	Button,
	ButtonStrip,
	Modal,
	ModalActions,
	ModalContent,
	ModalTitle,
	NoticeBox,
} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { NO_ESCAPE } from "../../../../shared/utils/i18n";
import styles from "./DeleteProfileModal.module.css";

export interface DeleteProfileModalProps {
	name: string;
	onDelete: () => Promise<void>;
	onClose: () => void;
}

export function DeleteProfileModal({
	name,
	onDelete,
	onClose,
}: DeleteProfileModalProps) {
	const [deleting, setDeleting] = useState(false);
	const [error, setError] = useState<string | null>(null);
	// Deleting removes the row this modal belongs to, so it may unmount before the request resolves
	const mountedRef = useRef(true);
	useEffect(
		() => () => {
			mountedRef.current = false;
		},
		[],
	);

	const onConfirm = async () => {
		setDeleting(true);
		setError(null);
		try {
			await onDelete();
			if (mountedRef.current) {
				onClose();
			}
		} catch (e) {
			if (mountedRef.current) {
				setError(e instanceof Error ? e.message : String(e));
				setDeleting(false);
			}
		}
	};

	return (
		<Modal small position="middle" onClose={deleting ? undefined : onClose}>
			<ModalTitle>{i18n.t("Delete profile")}</ModalTitle>
			<ModalContent>
				<div className={styles.content}>
					<p className={styles.text}>
						{i18n.t(
							"Delete the profile \"{{name}}\"? Data that was already generated is not affected. This cannot be undone.",
							{ name, interpolation: NO_ESCAPE },
						)}
					</p>
					{error && (
						<NoticeBox error title={i18n.t("The profile could not be deleted")}>
							{error}
						</NoticeBox>
					)}
				</div>
			</ModalContent>
			<ModalActions>
				<ButtonStrip end>
					<Button secondary disabled={deleting} onClick={onClose}>
						{i18n.t("Cancel")}
					</Button>
					<Button
						destructive
						loading={deleting}
						disabled={deleting}
						onClick={onConfirm}
					>
						{i18n.t("Delete profile")}
					</Button>
				</ButtonStrip>
			</ModalActions>
		</Modal>
	);
}

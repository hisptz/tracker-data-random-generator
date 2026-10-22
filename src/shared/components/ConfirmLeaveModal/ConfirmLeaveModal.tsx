import React from "react";
import {
	Button,
	ButtonStrip,
	Modal,
	ModalActions,
	ModalContent,
	ModalTitle,
} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";

export interface ConfirmLeaveModalProps {
	title: string;
	message: string;
	leaveLabel: string;
	onStay: () => void;
	onLeave: () => void;
}

export function ConfirmLeaveModal({
	title,
	message,
	leaveLabel,
	onStay,
	onLeave,
}: ConfirmLeaveModalProps) {
	return (
		<Modal small position="middle" onClose={onStay}>
			<ModalTitle>{title}</ModalTitle>
			<ModalContent>{message}</ModalContent>
			<ModalActions>
				<ButtonStrip end>
					<Button secondary onClick={onStay}>
						{i18n.t("Stay on page")}
					</Button>
					<Button destructive onClick={onLeave}>
						{leaveLabel}
					</Button>
				</ButtonStrip>
			</ModalActions>
		</Modal>
	);
}

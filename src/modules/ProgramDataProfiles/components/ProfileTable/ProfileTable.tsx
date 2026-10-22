import React from "react";
import { Link } from "react-router-dom";
import {
	Button,
	DataTable,
	DataTableBody,
	DataTableCell,
	DataTableColumnHeader,
	DataTableHead,
	DataTableRow,
} from "@dhis2/ui";
import i18n from "@dhis2/d2-i18n";
import { Profile } from "../../../../shared/hooks/profiles";
import { ProfileActionsMenu } from "./ProfileActionsMenu";
import styles from "./ProfileTable.module.css";

export interface ProfileTableProps {
	profiles: Profile[];
	onGenerate: (profileId: string) => void;
	onEdit: (profileId: string) => void;
	onDuplicate: (profileId: string) => void;
	onDelete: (profileId: string) => Promise<void>;
}

export function ProfileTable({
	profiles,
	onGenerate,
	onEdit,
	onDuplicate,
	onDelete,
}: ProfileTableProps) {
	return (
		<DataTable>
			<DataTableHead>
				<DataTableRow>
					<DataTableColumnHeader>{i18n.t("Name")}</DataTableColumnHeader>
					<DataTableColumnHeader align="right">
						{i18n.t("Actions")}
					</DataTableColumnHeader>
				</DataTableRow>
			</DataTableHead>
			<DataTableBody>
				{profiles.map(({ id, name }) => (
					<DataTableRow key={id}>
						{/* The whole name cell opens the editor; the link keeps it reachable by keyboard */}
						<DataTableCell
							className={styles.nameCell}
							onClick={() => onEdit(id)}
						>
							<Link
								className={styles.name}
								to={`profiles/${id}`}
								onClick={(event) => event.stopPropagation()}
							>
								{name}
							</Link>
						</DataTableCell>
						<DataTableCell align="right" width="1%">
							<div className={styles.actions}>
								<Button small onClick={() => onGenerate(id)}>
									{i18n.t("Generate data")}
								</Button>
								<ProfileActionsMenu
									name={name}
									onEdit={() => onEdit(id)}
									onDuplicate={() => onDuplicate(id)}
									onDelete={() => onDelete(id)}
								/>
							</div>
						</DataTableCell>
					</DataTableRow>
				))}
			</DataTableBody>
		</DataTable>
	);
}

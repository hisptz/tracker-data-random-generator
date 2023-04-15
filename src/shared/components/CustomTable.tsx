import {Table, TableBody, TableCell, TableCellHead, TableHead, TableRow, TableRowHead} from "@dhis2/ui";
import styles from "../../modules/Programs/components/ProgramTable.module.css";
import React from "react";
import {TableInstance} from "react-table";


export interface CustomTableProps {
    instance: TableInstance<any>;
    onRowClick: (rowId: string) => void;
}

export function CustomTable({instance, onRowClick}: CustomTableProps) {
    const {

        headerGroups,
        prepareRow,
        getTableProps,
        rows,
    } = instance

    return (
        <Table {...getTableProps()}>
            <TableHead>
                {headerGroups.map(headerGroup => (
                    <TableRowHead {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <TableCellHead {...column.getHeaderProps()}
                                           colSpan={`${(column.getHeaderProps() as any).colSpan}`}>
                                {column.render('Header')}
                            </TableCellHead>
                        ))}
                    </TableRowHead>
                ))}
            </TableHead>
            <TableBody>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <TableRow
                            className={styles['pointer']}
                            onClick={() => onRowClick ? onRowClick(row.id) : undefined}
                            {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <TableCell
                                    {...cell.getCellProps()}>
                                    <div
                                        onClick={() => onRowClick ? onRowClick(cell.row.id) : undefined}>{cell.render('Cell')}</div>
                                </TableCell>
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    )
}

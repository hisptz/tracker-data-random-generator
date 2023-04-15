import React, {memo, useMemo} from "react"
import {Pagination as PaginationInterface} from "@hisptz/dhis2-utils";
import {Column, useTable} from "react-table";
import i18n from "@dhis2/d2-i18n";
import {
    Pagination,
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableFoot,
    TableHead,
    TableRow,
    TableRowHead
} from "@dhis2/ui"
import styles from "./ProgramTable.module.css"

export interface ProgramTableProps {
    pagination: PaginationInterface,
    data: { id: string; displayName: string }[],
    onPageChange: (newPage: number) => void,
    onPageSizeChange: (newPageSize: number) => void,
    onRowClick?: (rowId: string) => void
}

export function useProgramTable({pagination, data, onPageSizeChange, onPageChange}: ProgramTableProps) {
    const columns: Column<{ id: string, displayName: string }>[] = useMemo(() => ([
        {
            Header: i18n.t("Name"),
            accessor: 'displayName',
        },
        {
            Header: i18n.t("With registration"),
            accessor: (originalRow: any, index, sub) => {
                return originalRow.registration ? i18n.t('Yes') : i18n.t('No')
            },

        },
    ]), []);
    const instance = useTable<{ id: string; displayName: string }>({
        data: data,
        columns,
        getRowId: (originalRow) => {
            return originalRow.id;
        }
    })

    return {
        ...instance,
        pagination: {
            ...pagination,
            onPageChange,
            onPageSizeChange
        }
    }
}

export const ProgramTable = memo((tableProps: ProgramTableProps) => {
    const {
        flatHeaders,
        headerGroups,
        prepareRow, getTableProps,
        rows,
        pagination,
    } = useProgramTable(tableProps);

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
                            onClick={() => tableProps.onRowClick ? tableProps.onRowClick(row.id) : undefined}
                            {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <TableCell
                                    {...cell.getCellProps()}>
                                    <div
                                        onClick={() => tableProps.onRowClick ? tableProps.onRowClick(cell.row.id) : undefined}>{cell.render('Cell')}</div>
                                </TableCell>
                            })}
                        </TableRow>
                    )
                })}
            </TableBody>
            <TableFoot>
                <TableRow>
                    <TableCell colSpan={`${flatHeaders.length}`}>
                        <Pagination
                            {...pagination}
                        />
                    </TableCell>
                </TableRow>
            </TableFoot>
        </Table>
    )
})

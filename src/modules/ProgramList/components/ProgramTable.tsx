import React, {useMemo} from "react"
import {Pagination as PaginationInterface, Program} from "@hisptz/dhis2-utils";
import {Column, usePagination, useTable} from "react-table";
import i18n from "@dhis2/d2-i18n";
import {
    Table,
    TableHead,
    TableRowHead,
    TableCellHead,
    TableBody,
    TableRow,
    TableCell,
    TableFoot,
    Pagination
} from "@dhis2/ui"

export interface ProgramTableProps {
    pagination: PaginationInterface,
    data: Program[],
    onPageChange: (newPage: number) => void,
    onPageSizeChange: (newPageSize: number) => void,
}

export function useProgramTable({pagination, data, onPageSizeChange, onPageChange}: ProgramTableProps) {
    const columns: Column[] = useMemo(() => ([
        {
            Header: i18n.t("Name"),
            accessor: 'displayName',
        },
        {
            Header: i18n.t("With registration"),
            accessor: (originalRow: any, index, sub) => {
                return originalRow.registration  ? i18n.t('Yes') : i18n.t('No')
            },

        },
    ]), []);

    const instance = useTable({
        data: data,
        columns,
        pageCount: pagination.pageCount,
        manualPagination: true,
        initialState: {
            pageIndex: pagination.page,
            pageSize: pagination.pageSize,
            total: pagination.total
        }
    } as any, usePagination)

    return {
        ...instance,
        pagination: {
            ...pagination,
            onPageChange,
            onPageSizeChange
        }
    }
}

export function ProgramTable(tableProps: ProgramTableProps) {
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
                            <TableCellHead {...column.getHeaderProps()}>
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
                        <TableRow {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <TableCell {...cell.getCellProps()}>{cell.render('Cell')}</TableCell>
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
}

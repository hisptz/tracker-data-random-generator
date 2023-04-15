import {useDataQuery} from "@dhis2/app-runtime";
import {useMemo, useCallback} from "react"

export const programsQuery = {
    programs: {
        resource: "programs",
        params: ({page, pageSize, keyword}: any) => {
            return {
                page,
                pageSize,
                totalPages: true,
                filter: keyword ? [
                    `identifiableToken:like:${keyword}`
                ] : undefined,
                fields: [
                    `id,displayName,registration`,
                ]
            }
        }
    }
}

export function useProgramsData() {
    const {data, loading, error, refetch} = useDataQuery(programsQuery, {
        variables: {
            page: 1,
            pageSize: 50
        }
    });

    const pagination = useMemo(() => {
        return (data?.programs as any)?.pager ?? {page: 1, pageSize: 50}
    }, [data]);

    const rawData = useMemo(() => {
        return (data?.programs as any)?.programs
    }, [data]);

    const onPageChange = useCallback(
        (page: number) => {
            refetch({
                page
            })
        },
        [refetch],
    );
    const onPageSizeChange = useCallback(
        (pageSize: number) => {
            refetch({
                pageSize,
                page: 1
            })
        },
        [refetch],
    );


    return {
        data: rawData,
        onPageChange,
        onPageSizeChange,
        pagination,
        loading,
        error
    }
}

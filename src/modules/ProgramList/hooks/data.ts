import {useDataQuery} from "@dhis2/app-runtime";
import {useCallback, useEffect, useMemo, useRef, useState} from "react"
import {debounce} from "lodash";

export const programsQuery = {
    programs: {
        resource: "programs",
        params: ({page, pageSize, keyword}: any) => {
            return {
                page,
                pageSize,
                totalPages: true,
                filter: keyword ? [
                    `identifiable:ilike:${keyword}`
                ] : undefined,
                fields: [
                    `id,displayName,registration`,
                ]
            }
        }
    }
}

export function useProgramsData() {
    const [keyword, setKeyword] = useState<string | undefined>();
    const {data, loading, error, refetch} = useDataQuery(programsQuery, {
        variables: {
            page: 1,
            pageSize: 50
        }
    });

    const onSearch = useRef(debounce((keyword?: string) => {
        if (!keyword) {
            return;
        }
        refetch({
            keyword,
            page: 1
        })
    }, 2000))?.current;

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

    useEffect(() => {
        if (keyword) {
            onSearch(keyword)
        } else {
            refetch(
                {
                    keyword: undefined
                }
            )
        }
    }, [keyword]);


    return {
        data: rawData,
        keyword,
        setKeyword,
        onPageChange,
        onPageSizeChange,
        pagination,
        loading,
        error
    }
}

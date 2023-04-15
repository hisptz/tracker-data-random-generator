import React, {useMemo, useState} from "react"
import {useSavedObject} from "@dhis2/app-service-datastore";
import {useNavigate, useParams} from "react-router-dom";
import {isEmpty} from "lodash";
import i18n from '@dhis2/d2-i18n';
import {useRecoilValue} from "recoil";
import {ProgramState} from "../../state/program";
import {Button, ButtonStrip, colors} from "@dhis2/ui"
import {Column, useTable} from "react-table";
import {CustomTable} from "../../../../shared/components/CustomTable";
import {DataConfigurationForm} from "../../../../script/interfaces";
import {GenerateDataModal} from "./components/GenerateDataModal";

export function DataProfiles() {
    const {id: programId} = useParams();
    const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
    const navigate = useNavigate();
    const program = useRecoilValue(ProgramState(programId)) as any;
    const [dataProfiles,] = useSavedObject(programId as string);

    const columns: Column<DataConfigurationForm>[] = useMemo(() => [
        {
            Header: i18n.t("Name"),
            accessor: 'name'
        },
        {
            Header: i18n.t("Actions"),
            accessor: (originalRow) => {
                return originalRow.id
            },
            Cell: (props: any,) => {
                const id = props.row.id;
                return (
                    <ButtonStrip>
                        <Button onClick={(_: any, event: React.SyntheticEvent) => {
                            event.stopPropagation()
                            navigate(`config/${id}`)
                        }
                        }>{i18n.t("Edit")}</Button>
                        <Button onClick={(_: any, event: React.SyntheticEvent) => {
                            event.stopPropagation();
                            setSelectedProfile(id)
                        }}>{i18n.t("Generate")}</Button>
                    </ButtonStrip>
                )
            }
        }
    ], []);

    const instance = useTable<DataConfigurationForm>({
        columns,
        data: dataProfiles as any[] ?? [],
        getRowId: (originalRow) => {
            return originalRow.id;
        }
    })

    if (isEmpty(dataProfiles)) {
        return (
            <div className="h-100  column gap-32 align-center center">
                <h2 style={{color: colors.grey700}}>{i18n.t("There are no data profiles for the program {{program}}. Click on Create data profile to create one.", {
                    program: program.displayName
                })}</h2>
                <Button onClick={() => navigate("config")} primary>
                    {i18n.t("Create data profile")}
                </Button>
            </div>
        )
    }


    return (
        <div>
            <GenerateDataModal onClose={() => setSelectedProfile(null)} profileId={selectedProfile}/>
            <CustomTable
                instance={instance}
                onRowClick={() => {
                }}
            />
        </div>
    )
}

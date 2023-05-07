import {DHIS2ValueType, OptionSet} from "@hisptz/dhis2-utils";

export interface FormField {
    name: string;
    valueType: DHIS2ValueType;
    label: string;
    optionSet?: OptionSet,
    validations?: Record<string, any>;
    required?: boolean
}

export interface FormSection {
    id: string;
    name?: string;
    fields: FormField[];
    fromProgramStage?: boolean;
    programStage?: string;
}

export interface FormStage {
    id: string;
    name: string;
    sections: FormSection[];

}

import {DataConfiguration, GenerateProps} from "../interfaces";
import {Program, TrackedEntityInstance} from "@hisptz/dhis2-utils";


export class TrackerRandomDataEngine {
    config: DataConfiguration;
    program: Program;

    constructor({config, program}: { config: DataConfiguration, program: Program }) {
        this.config = config;
        this.program = program;
    }

    generate({noOfRecords}: GenerateProps): TrackedEntityInstance[] {
        console.info(`Generating ${noOfRecords}  trackedEntityInstances`);
        return []
    }
}


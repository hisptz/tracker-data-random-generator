import {TrackerRandomDataEngine} from "./engine";
import {config} from "../data/config";
import {program} from "../data/program";

const dataEngine = new TrackerRandomDataEngine({config, program});

dataEngine.generate({
    noOfRecords: 100
})

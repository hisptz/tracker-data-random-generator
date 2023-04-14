import {TrackerRandomDataEngine} from "./engine";
import {config} from "../data/config";
import {program} from "../data/program";
import {head} from "lodash";

const dataEngine = new TrackerRandomDataEngine({config, program});

const teis = dataEngine.generate({
    noOfRecords: 10
})

console.log(JSON.stringify(teis))

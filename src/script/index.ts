import {TrackerRandomDataEngine} from "./engine";
import {config} from "../data/config";
import {program} from "../data/program";

const dataEngine = new TrackerRandomDataEngine({config, program});

const teis = dataEngine.generate({
    count: 10
})

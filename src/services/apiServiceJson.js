import axios from "axios";

import {baseURLJson} from "../constants";

const apiServiceJson = axios.create({baseURL:baseURLJson});

export {
    apiServiceJson
}
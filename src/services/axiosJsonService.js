import axios from "axios";
import {baseUrlJson} from "../constants/urls";

const axiosJsonService = axios.create({baseURL:baseUrlJson});

export {axiosJsonService}
import axios from "axios";
import {baseURLCars} from "../constants";

const apiServiceCars = axios.create({baseURL:baseURLCars});

export {
    apiServiceCars
}
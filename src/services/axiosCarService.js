import axios from "axios";
import {baseUrlCars} from "../constants/urls";

const axiosCarService = axios.create({baseURL:baseUrlCars});

export {axiosCarService}
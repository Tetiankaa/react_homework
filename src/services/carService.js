import {apiServiceCars} from "./apiServiceCars";
import {urls} from "../constants";

class CarService {
    getAll(){
        return apiServiceCars.get(urls.cars)
    }
}

export const carService = new CarService();
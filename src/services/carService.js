import {axiosService} from "./axiosService";
import {urls} from "../constants";

const carService = {
    getAll:()=>axiosService.get(urls.cars.base),
    update:(id,car)=>axiosService.put(urls.cars.byId(id), car),
    delete:(id)=>axiosService.delete(urls.cars.byId(id)),
    create:(car)=>axiosService.post(urls.cars.base, car)
}

export {carService}
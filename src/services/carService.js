import {axiosCarService} from "./axiosCarService";
import {urls} from "../constants/urls";

const carService = {
    getAll: () => axiosCarService.get(urls.cars.base),
    create: (car) => axiosCarService.post(urls.cars.base, car),
    updateById: (id, car) => axiosCarService.put(urls.cars.byId(id), car),
    deleteById: (id) => axiosCarService.delete(urls.cars.byId(id))
}

export {carService}
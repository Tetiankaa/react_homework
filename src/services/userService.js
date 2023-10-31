import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll:()=>axiosService.get(urls.users.base),
    getUserById:(userId)=>axiosService.get(urls.users.userById(userId))
}

export {userService}
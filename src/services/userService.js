import {axiosJsonService} from "./axiosJsonService";
import {urls} from "../constants/urls";


const userService = {
    getAll:()=>axiosJsonService.get(urls.users),
    create:(user)=>axiosJsonService.post(urls.users, user)
}

export {userService}
import {axiosService} from "./axiosService";
import {launches} from "../urls/urls";

const launchService ={
    getAll:()=>axiosService.get(launches)
}
export {launchService};
import {axiosService} from "./axiosService";
import {urls} from "../constants";

const episodeServices = {
    getAll:(page)=>axiosService.get(urls.episode,{params:{page}})
}
export {episodeServices}
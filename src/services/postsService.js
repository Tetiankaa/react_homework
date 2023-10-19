import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";


const postsService = {
    getAll:()=>axiosService.get(urls.posts.base),
    getById:(id)=>axiosService.get(urls.posts.byId(id))
}
export {postsService}
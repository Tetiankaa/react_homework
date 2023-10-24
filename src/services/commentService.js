import {axiosJsonService} from "./axiosJsonService";
import {urls} from "../constants/urls";

const commentService = {
    getAll:()=>axiosJsonService.get(urls.comments),
    create:(comment)=>axiosJsonService.post(urls.comments, comment)
}
export {commentService}
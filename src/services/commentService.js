import {apiServiceJson} from "./apiServiceJson";
import {urls} from "../constants";

class CommentService {
    getAll(){
        return apiServiceJson.get(urls.comments)
    }
}

export const commentService = new CommentService();
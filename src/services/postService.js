import {apiServiceJson} from "./apiServiceJson";
import {urls} from "../constants";

class PostService{
    getAll(){
        return apiServiceJson.get(urls.posts)
    }
}

export const postService = new PostService();
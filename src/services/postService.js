import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postService = {
    getPostById:(postId)=>axiosService.get(urls.posts.postById(postId)),
    getPostsByUserId:(userId)=>axiosService.get(urls.posts.postByUserId(userId))
}

export {postService}
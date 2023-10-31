import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const commentService = {
    getCommentsByPostId:(postId)=>axiosService.get(urls.comments.commentsByPostId(postId))
}
export {commentService}
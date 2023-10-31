import React, {useEffect, useState} from 'react';
import {Comment} from "./Comment";
import {commentService} from "../../services/commentService";

const Comments = ({postId}) => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentService.getCommentsByPostId(postId).then(({data})=>setComments(data))
    },[postId])


    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};
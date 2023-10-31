import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import {PostDetails} from "./PostDetails";

const PostDetailsContainer = ({postId}) => {
   const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getPostById(postId).then(({data})=>setPost(data))
    }, [postId]);
    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {PostDetailsContainer};
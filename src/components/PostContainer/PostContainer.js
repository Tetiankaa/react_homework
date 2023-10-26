import React, {useEffect, useState} from 'react';

import {postService} from "../../services/postService";
import {Post} from "./Post";

const PostContainer = ({postId}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(postId).then(({data})=>setPost(data))
    }, [postId]);
    return (
        <div>
            {post && <Post post={post}/>}
        </div>
    );
};

export {PostContainer};
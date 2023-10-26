import React from 'react';
import {useLocation} from "react-router-dom";

import {PostContainer} from "../components/PostContainer/PostContainer";

const PostPage = () => {
    const {state:postId} = useLocation();

    return (
        <div>
            <PostContainer postId={postId}/>
        </div>
    );
};

export {PostPage};
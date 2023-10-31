import React from 'react';
import {PostDetails} from "../components/PostDetailsContainer/PostDetails";
import {useLoaderData} from "react-router-dom";
import {Comments} from "../components/CommentsContainer/Comments";

const PostDetailsPage = () => {
    const {comments:{data:comments}, post:{data:post}}= useLoaderData();

    return (
        <div>
            <PostDetails post={post}/>
            <Comments comments={comments}/>
        </div>
    );
};

export {PostDetailsPage};
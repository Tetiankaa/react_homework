import React from 'react';
import {PostDetailsContainer} from "../components/PostDetailsContainer/PostDetailsContainer";
import {useParams} from "react-router-dom";
import {Comments} from "../components/CommentsContainer/Comments";

const PostDetailsPage = () => {

    const {postId} = useParams();

    return (
        <div>
            <PostDetailsContainer postId={postId}/>
            <Comments postId={postId}/>
        </div>
    );
};

export {PostDetailsPage};
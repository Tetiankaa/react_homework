import React from 'react';

const Post = ({post}) => {
    const {userId, id, title, body} = post;
    return (
        <div>
            <h1>Post</h1>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export {Post};
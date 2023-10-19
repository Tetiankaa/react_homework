import React from 'react';

import css from './PostDetails.module.css';

const PostDetails = ({postDetail}) => {
    const {userId, id, title, body} = postDetail;

    return (
        <div className={css.PostDetail}>
            <p>userId: {userId}</p>
            <p>ID:{id}</p>
            <p>TITLE: {title}</p>
            <p>BODY: {body}</p>
        </div>
    );
};

export {PostDetails};
import React from 'react';

const PostDetails = ({postDetail}) => {
    const {id, title, body}= postDetail;

    return (
        <div>
            <p>ID:{id}</p>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export {PostDetails};
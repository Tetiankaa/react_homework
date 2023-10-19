import React from 'react';
import css from './Post.module.css';

const Post = ({post,getInfo}) => {
    const {id,title} = post;
    return (
        <div>
            <p>ID:{id}</p>
            <h3>{title}</h3>
            <button onClick={getInfo(id)}>Read more</button>
        </div>
    );
};

export {Post};
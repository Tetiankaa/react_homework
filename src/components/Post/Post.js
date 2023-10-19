import React from 'react';

import css from './Post.module.css';

const Post = ({post, getInfo}) => {
    const {id, title} = post;

    return (
        <div className={css.Post}>

            <p>ID:{id}</p>
            <p>{title}</p>
            <button onClick={() => getInfo(id)} className={css.Button}>Read more</button>
        </div>
    );
};

export {Post};
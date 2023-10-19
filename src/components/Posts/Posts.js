import React, {useEffect, useState} from 'react';

import css from './Posts.module.css';
import {postsService} from "../../services/postsService";
import {Post} from "../Post/Post";
import {PostDetails} from "../PostDetails/PostDetails";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetail, setPostDetail] = useState(null);

    const getInfo = async (postId) => {
        let {data} = await postsService.getById(postId);
        setPostDetail(data);
    }

    useEffect(() => {
        postsService.getAll().then(({data}) => setPosts(data))
    }, []);


    return (
        <div>
            <div className={css.Posts}>
                {posts.map(post => <Post key={post.id} post={post} getInfo={getInfo}/>)}

            </div>
            {postDetail && <PostDetails postDetail={postDetail}/>}

        </div>
    );
};

export {Posts};
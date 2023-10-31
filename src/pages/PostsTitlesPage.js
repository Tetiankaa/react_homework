import React from 'react';
import {useLoaderData} from "react-router-dom";
import {Posts} from "../components/PostsTitlesContainer/Posts";

const PostsTitlesPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <Posts posts={data}/>
        </div>
    );
};

export {PostsTitlesPage};
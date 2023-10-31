import React from 'react';
import {useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const {title,id} = post;

    const navigate = useNavigate();

    return (
        <div>
            <div>{title}</div>
            <button onClick={()=>navigate(`${id}`)}>More info</button>
        </div>
    );
};

export {Post};
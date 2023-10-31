import React from 'react';
import {useNavigate} from "react-router-dom";

const User = ({user}) => {
    const {id,name } = user;

    const navigate = useNavigate();

    return (
        <div>
            <div>ID: {id}</div>
            <div>name: {name}</div>
            <button onClick={()=>navigate(`${id}`)}>Details</button>
        </div>
    );
};

export {User};
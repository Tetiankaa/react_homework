import React from 'react';
import {useNavigate} from "react-router-dom";

const UserDetails = ({user}) => {
    const {id, name, username, email, phone, address:{city}} = user;

    const navigate = useNavigate();

    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>phone: {phone}</div>
            <div>city: {city}</div>
            <button onClick={()=>navigate('posts')}>Posts of current user</button>
        </div>
    );
};

export {UserDetails};
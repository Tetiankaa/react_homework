import React from 'react';
import {Users} from "../components/UserContainer/Users";
import {useLoaderData} from "react-router-dom";

const UsersPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <Users users={data}/>
        </div>
    );
};

export {UsersPage};
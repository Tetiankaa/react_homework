import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";
import {UserDetails} from "../components/UserDetailsContainer/UserDetails";

const UserDetailsPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <UserDetails user={data}/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UserDetailsPage};
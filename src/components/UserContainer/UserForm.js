import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators/userValidator";
import {userService} from "../../services/userService";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState:{errors,isValid}}
        = useForm({mode:"all", resolver:joiResolver(userValidator)});


    const save = async (user) =>{
        const {data} = await userService.create(user);
        setUsers(prev=>[...prev,data]);
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'phone'} {...register('phone')}/>
                <button disabled={!isValid}>save</button>
            </form>
            {errors.name && <div>{errors.name.message}</div>}
            {errors.username && <div>{errors.username.message}</div>}
            {errors.email && <div>{errors.email.message}</div>}
            {errors.phone && <div>{errors.phone.message}</div>}
        </>
    );
};

export {UserForm};
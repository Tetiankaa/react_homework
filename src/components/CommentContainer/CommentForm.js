import React from 'react';
import {useForm} from "react-hook-form";
import {commentService} from "../../services/commentService";
import {joiResolver} from "@hookform/resolvers/joi";
import {commentValidator} from "../../validators/commentValidator";

const CommentForm = ({setComments}) => {
    const {reset,register,handleSubmit,formState:{errors, isValid}}
        = useForm({mode:"all",resolver:joiResolver(commentValidator)})

    const save = async (comment) =>{
        const {data} = await commentService.create(comment);
        setComments(prev=>[...prev, data]);
        reset();
    }
    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'post id'} {...register('postId', {valueAsNumber: true})}/>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <button disabled={!isValid}>Save</button>
            </form>
            {errors.postId && <div>{errors.postId.message}</div>}
            {errors.name && <div>{errors.name.message}</div>}
            {errors.email && <div>{errors.email.message}</div>}
            {errors.body && <div>{errors.body.message}</div>}
        </>

    );
};

export {CommentForm};
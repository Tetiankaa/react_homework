import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";

import {carValidator} from "../validators";
import {carService} from "../services";
import {carActions} from "../redux/slices/carSlice";

const CarForm = () => {
    const {reset, register, handleSubmit,setValue ,formState:{isValid, errors}} = useForm({mode:"onChange", resolver:joiResolver(carValidator)})

    const dispatch = useDispatch();
    const {updatedCar} = useSelector(state => state.cars)
    const save = async (car) =>{
        if (updatedCar){
            await carService.update(updatedCar.id, car);
            dispatch(carActions.setUpdatedCar(!updatedCar));
        }else {
            await carService.create(car);
        }
        dispatch(carActions.setTrigger());
        reset();
    }

    useEffect(() => {
        if (updatedCar){
            setValue('brand',updatedCar.brand,{shouldValidate:true})
            setValue('price',updatedCar.price,{shouldValidate:true})
            setValue('year',updatedCar.year,{shouldValidate:true})
        }
    }, [updatedCar]);

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'Brand'} {...register('brand')}/>
            <input type="text" placeholder={'Price'} {...register('price',{valueAsNumber:true})}/>
            <input type="text" placeholder={'Year'} {...register('year',{valueAsNumber:true})}/>
            <button type={'submit'} disabled={!isValid}>save</button>

            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </form>
    );
};

export {CarForm};
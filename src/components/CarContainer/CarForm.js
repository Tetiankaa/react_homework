import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../../validators/carValidator";
import {carService} from "../../services/carService";

const CarForm = ({setTrigger, updateCar,setUpdateCar}) => {
    const {register, handleSubmit, reset, setValue, formState: {errors, isValid}} =
        useForm({mode: "all", resolver: joiResolver(carValidator)});

    const save = async (car) => {
        if (updateCar){
            await carService.updateById(updateCar.id, car);
            setUpdateCar(!updateCar);
        }else {
            await carService.create(car);
        }
        setTrigger(prev => !prev);
        reset();
    }

    useEffect(() => {
        if (updateCar){
            setValue("brand", updateCar.brand,{shouldValidate:true})
            setValue("price", updateCar.price,{shouldValidate:true})
            setValue("year", updateCar.year,{shouldValidate:true})
        }
    }, [updateCar])
    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button disabled={!isValid}>save</button>
            </form>
            {errors.brand && <p>{errors.brand.message}</p>}
            {errors.price && <p>{errors.price.message}</p>}
            {errors.year && <p>{errors.year.message}</p>}
        </>
    );
};

export {CarForm};
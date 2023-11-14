import React from 'react';
import {useDispatch} from "react-redux";

import {carService} from "../services";
import {carActions} from "../redux/slices/carSlice";

const Car = ({car}) => {
    const {id, brand, year, price} = car;

    const dispatch = useDispatch();

    const deleteCar =async (carId) =>{
        await carService.delete(carId);
        dispatch(carActions.setTrigger())
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <button onClick={()=>dispatch(carActions.setUpdatedCar(car))}>update</button>
            <button onClick={()=>deleteCar(id)}>delete</button>
        </div>
    );
};

export {Car};
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {CarForm} from "./CarForm";
import {carService} from "../services";
import {carActions} from "../redux/slices/carSlice";
import {Car} from "./Car";

const Cars = () => {
    const dispatch = useDispatch();

    const {cars, trigger} = useSelector(state => state.cars);

    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carActions.setCars(data)))
    }, [trigger]);
    return (
        <div>
            <CarForm/>
            <hr/>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};
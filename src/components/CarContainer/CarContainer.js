import React, {useEffect, useState} from 'react';
import {carService} from "../../services/carService";
import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarContainer = () => {

    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null);
    const [updateCar, setUpdateCar] = useState(null);

    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [trigger]);

    return (
        <div>
            <CarForm setTrigger={setTrigger} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar} setTrigger={setTrigger}/>
        </div>
    );
};

export {CarContainer};
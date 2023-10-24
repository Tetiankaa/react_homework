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

    const deleteCar = async (carId) => {
        await carService.deleteById(carId);
        setTrigger(!trigger);
    }
    return (
        <div>
            <CarForm setTrigger={setTrigger} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
            <hr/>
            <Cars cars={cars} setUpdateCar={setUpdateCar} deleteCar={deleteCar}/>
        </div>
    );
};

export {CarContainer};
import React from 'react';
import {Car} from "./Car";

const Cars = ({cars, setUpdateCar, deleteCar}) => {
    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} deleteCar={deleteCar}/>)}
        </div>
    );
};

export {Cars};
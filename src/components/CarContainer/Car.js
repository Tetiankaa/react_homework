import React from 'react';
import {carService} from "../../services/carService";

const Car = ({car, setUpdateCar, setTrigger}) => {
    const {id, brand, price, year} = car;

  const deleteCar = async (carId) =>{
      await carService.deleteById(carId);
      setTrigger(prev=> !prev);
  }


    return (
        <div>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>update</button>
            <button onClick={() => deleteCar(id)}>delete</button>
            <p>-----------------------</p>
        </div>
    );
};

export {Car};
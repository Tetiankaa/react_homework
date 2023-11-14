import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars:[],
    trigger:null,
    updatedCar:null
}

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCars:(state, action)=>{
            state.cars = action.payload;
        },
        setTrigger:(state)=>{
            state.trigger = !state.trigger;
        },
        setUpdatedCar:(state,action)=>{
            state.updatedCar = action.payload;
        }
    }
});

const {reducer:carReducer, actions} = carSlice;

const carActions = {...actions};

export {
    carReducer, carActions
}
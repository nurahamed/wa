import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../servises/weatherApi";
import weatherSlice from "../servises/weatherSlice";


export default configureStore({
    reducer:{
        [weatherApi.reducerPath]: weatherApi.reducer,
        weatherState: weatherSlice
    }
})
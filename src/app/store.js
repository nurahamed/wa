import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../servises/weatherApi";



export default configureStore({
    reducer:{
        [weatherApi.reducerPath]: weatherApi.reducer
    }
})
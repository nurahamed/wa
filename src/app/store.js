import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "../servises/weatherApi";
import weatherSlice from "../servises/weatherSlice";
// import { newsApi } from '../servises/newsApi'

export default configureStore({
    reducer: {
        [weatherApi.reducerPath]: weatherApi.reducer,
        // [newsApi.reducerPath]: newsApi.reducer,
        weatherState: weatherSlice
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware)
})



// import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { weatherApi } from "../servises/weatherApi";
// import weatherSlice from "../servises/weatherSlice";


// export default configureStore({
//     reducer:{
//         [weatherApi.reducerPath]: weatherApi.reducer,
//         weatherState: weatherSlice
//     },
//     middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(weatherApi.middleware)
// })
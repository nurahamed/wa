import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    location: "",
    fahrenheit: true,
    saves: [],
    itemSaved: false
 }

 const  weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setLocation: (state, action)=>{
            state.location = action.payload
        },
        
    }
 })
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
        
        setFahrenheit: (state, action)=>{
            state.fahrenheit = action.payload
        },
        setSaves: (state, action)=>{
            state.saves = action.payload
        },
        setItemSaves: (state, action)=>{
            state.itemSaved = action.payload
        },

    }
 })

 export const { setLocation, setFahrenheit, setItemSaves, setSaves} = weatherSlice.action
export default  weatherSlice.reducer
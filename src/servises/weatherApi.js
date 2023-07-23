 import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'weatherapi-com.p.rapidapi.com'
const weatherHeaders = {
    'X-RapidAPI-Key': 'a4e4f7ed6amsh72a522334b2307dp161e6ejsn2b86226008b5',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'

}

const requestWeather = (url)=>({
    url,
    headers: weatherHeaders
});

export const weatherApi = createApi ({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getForcecastWeather : builder.query({
             query:(location)=> requestWeather(`forecast.json?q=${location}&days=3`)
        }),

        getSearchWeather : builder.query({
            query:(search)=> requestWeather(`search.json?q=${search}&days=3`)
       })


     })
})

export const {useGetForecastWeatherQuery, useGetSearchtWeatherQuery }  = weatherApi



//  const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a4e4f7ed6amsh72a522334b2307dp161e6ejsn2b86226008b5',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
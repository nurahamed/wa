import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../servises/weatherSlice';
import { Box, Typography, Stack, Divider } from '@mui/material';
import { useGetForecastWeatherQuery } from '../servises/weatherApi';
import Moment from 'react-moment'
import useGeoLocation from '../hooks/useGeolocation';
import weatherChart  from '../components/Chart'
import TodaysOverview from '../components/TodaysOverview'
import SearchBar from '../components/Searchbar'
import ThreeDayForecast from '../components/ThreeDayForecast'
import Loader from '../components/Loader'

const Dashboard = () => {
    const getGeoLocation = useGeoLocation()
    const isLoadingLocation =getGeoLocation.loaded
    const locationState = useSelector((state)=> state.weatherState)
    console.log(locationState)

  return (
    <div>
      dashboard
    </div>
  )
}

export default Dashboard

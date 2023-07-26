import React, { useEffect, useState } from 'react';
import Mapbox from '../components/Mapbox'
import News from '../components/News';
import { Box, Stack } from '@mui/material';
import useGeoLocation from '../hooks/useGeolocation'
import { setLocation } from '../servises/weatherSlice'
import { useSelector, useDispatch } from 'react-redux';
import { useGetForecastWeatherQuery } from '../servises/weatherApi';
// import { useGetSearchWeatherQuery } from '../servises/weatherApi';
import { useGetWeatherNewsQuery } from '../servises/newsApi'
import Loader from '../components/Loader';
import { fetchNewsApi } from '../servises/newsApi';

const Map = () => {
  const getGeoLocation = useGeoLocation()
  const isLoadingLocation = getGeoLocation.loaded

  const locationState = useSelector((state) => state.weatherState.location)
  const dispatch = useDispatch()
  const { data, isFetching } = useGetForecastWeatherQuery(locationState)
  const location = data?.location
  const current = data?.current


  const [ news, setNews] = useState([])

  useEffect(() => {
    let currentLocation = ''
    if (locationState) {
      currentLocation = locationState
    } else if (getGeoLocation?.loaded) currentLocation = [getGeoLocation?.coordinates.lat, getGeoLocation?.coordinates.lng]

    dispatch(setLocation(currentLocation))
    // eslint-disable-next-line
  }, [getGeoLocation])

  //  useEffect(()=>{
  //   const newsData = ayanc (location) => {
  //     const getNews = await fetchNewsApi(location);
  //     setNews( getNews)
  //   }
  //   newsData(location?.region)
  //  }, [])

  // const { data: news } = useGetWeatherNewsQuery(location?.region)


  if (isFetching || !isLoadingLocation) return <> <Loader /> </>

  return (
    <Box>
      
      {/* <Mapbox/> */}
      
      <Stack spacing={2}>
        <Mapbox location={location} current={current} />
        {/* <News news/> */}
      </Stack>
    </Box>
  )
}

export default Map
import React from 'react'
import {CityDetailWeather} from "./CityDetailWeather";
import {useSelector} from "react-redux";
import { useParams } from 'react-router';

export const CityDetailWeathers = () => {
    const cities = useSelector(state =>  state.cities.fetchedCities);
    const {city} = useParams();
    const myCity =  cities.find(c => c.city.name === city)

    return myCity.list.map(i => {
        return (<CityDetailWeather city={i}/>)
    })
}
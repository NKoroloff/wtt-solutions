import React from 'react'
import {City} from './City'
import {useSelector} from "react-redux";

export const Cities = () => {
    const cities = useSelector(state =>  state.cities.fetchedCities)

    if(!cities.length){
        return <p>No cities to show</p>
    }


    return cities.slice(Math.max(cities.length - 5, 0))
        .map(city => {
            return (
                <City key={city.city.id} city={city} />
        )
    })
}

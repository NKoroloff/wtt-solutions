import React from 'react'
import {City} from './City'
import {useSelector} from "react-redux";

export const Cities = () => {
    const uniqueCities = new Set();
    let cities = useSelector(state =>  state.cities.fetchedCities);

    const filteredArr = cities.filter(el => {
        const duplicate = uniqueCities.has(el.city.id);
        uniqueCities.add(el.city.id);
        return !duplicate;
    });
    let showLastFiveCities = filteredArr.slice(0).slice(-5);
    if(!cities.length){
        return <p className="city">No cities to show</p>
    }
    return showLastFiveCities
        .map((city, index) => {
            return (
                <City key={index} city={city} />
        )
    })

}

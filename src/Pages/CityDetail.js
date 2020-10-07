import React from 'react';
import { useHistory, useParams } from 'react-router';
import {City} from "../components/CityMain/City";
import {useSelector} from "react-redux";
import {CityDetailWeathers} from "../components/CityDetailWeather/CityDetailWeathers";


export const CityDetail = () => {
    const cities = useSelector(state =>  state.cities.fetchedCities);
    const {city} = useParams();
    const myCity =  cities.find(c => c.city.name === city)
    console.log(myCity)



    const history = useHistory();
    function goBackHandler() {
        history.goBack();
    }

    return (
        <>
            <header className="header">
                <button onClick={goBackHandler}>BACK</button>
            </header>
            <City city={myCity}/>
            <CityDetailWeathers/>
        </>
    )

}
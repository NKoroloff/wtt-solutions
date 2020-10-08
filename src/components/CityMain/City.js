import React from 'react';
import './City.scss';


import {Link} from "react-router-dom";

export const City = ({city}) => {
    return (
            <Link
                to={'city/'+ city.city.name} className="city">
                    <div className="city__group">
                        <div className="city__name">{city.city.name}</div>
                        <div className="city__temperature">{parseInt(city.list[0].main.temp)} &deg;</div>
                    </div>
                    <div className="city__icon">
                        <img src={`http://openweathermap.org/img/w/${city.list[0].weather[0].icon}.png`} alt=""/>
                        <div className="city__weather">{city.list[0].weather[0].main}</div>
                    </div>
                    <div className="city__wind">Wind: {city.list[0].wind.speed} km/h</div>
                    <div className="city__date">Date:{city.list[0].dt_txt.slice(5, 10)}</div>
            </Link>
    )
}



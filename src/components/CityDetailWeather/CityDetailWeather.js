import React from 'react';


export const CityDetailWeather = ({city}) => {
    return(
        <div className="city">
            <div className="city__group">
                <div className="city__temperature">Temperature: {parseInt(city.main.temp)} &deg;</div>
            </div>
            <div className="city__icon">
                <img src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt=""/>
                <div className="city__weather">Weather: {city.weather[0].main}</div>
            </div>
            <div className="city__wind">Wind: {city.wind.speed} km/h</div>
            <div className="city__date">Date:{city.dt_txt}</div>
        </div>
        )
}
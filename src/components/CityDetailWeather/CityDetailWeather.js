import React from 'react';


export const CityDetailWeather = ({city}) => {
    return(
        <div className="city">
            <div className="city__temperature">Temperature: {parseInt(city.main.temp)} &deg;</div>
            <div className="city__weather">Weather: {city.weather[0].main}</div>
            <div className="city__wind">Wind: {city.wind.speed}</div>
            <div className="city__date">Date: {city.dt_txt}</div>
            <div className="weather-detail__icon">
                <img src={`http://openweathermap.org/img/w/${city.weather[0].icon}.png`} alt=""/>
            </div>
        </div>
        )
}
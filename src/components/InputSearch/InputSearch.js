import React, {useState} from 'react';
import {fetchCities} from "../../store/actions/city";
import {useDispatch} from "react-redux";
import './InputSearch.scss';

export const InputSearch = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch()

    const handleChange = (event) => {
        setCity(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(fetchCities(city.trim()))
        setCity('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className="field">
                <input type="text"
                       placeholder="Search city"
                       className="input"
                       onChange={handleChange}
                       value={city}
                />
                <div className="line"></div>
            </div>
        </form>

    )
}

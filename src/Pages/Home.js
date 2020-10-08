import React from 'react';
import {InputSearch} from "../components/InputSearch/InputSearch";
import {Cities} from "../components/CityMain/Cities";
import {useSelector} from "react-redux";
import './Home.scss';
import {Loader} from "../components/Loader/Loader";

export const Home = () => {
    const error = useSelector(state =>  state.cities.error)
    const loading = useSelector(state =>  state.cities.loading)
    return(
        <>
            <header className="header">
                <InputSearch />
            </header>
            <div className="container">
                {error && !loading ? <div className="error">Something went wrong. Try another city </div> : null}
                <div className="city-container">
                    {loading ? <Loader /> : null}
                    <Cities/>
                </div>
            </div>
        </>
    )
}
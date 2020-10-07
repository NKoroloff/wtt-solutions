import React from 'react';
import './index.scss'
import {Route} from "react-router";
import {CityDetail} from "./Pages/CityDetail";
import {Home} from "./Pages/Home";

const App = () => {

    return (
            <>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/city/:city" >
                    <CityDetail/>
                </Route>
            </>
    )
}

export default App;

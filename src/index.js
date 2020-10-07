import React from 'react';

import App from './App';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from "./store/reducers/rootReducer";
import { Provider }  from 'react-redux';
import thunk from "redux-thunk";
import {BrowserRouter} from "react-router-dom";


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const store = createStore(rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);


render(app, document.getElementById('root'));
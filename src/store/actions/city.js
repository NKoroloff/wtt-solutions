import {ERROR_SEARCH, FETCH_CITIES, LOADING_HIDE, LOADING_SHOW} from "./actionTypes";

const API_KEY = '877e913121f0ce4dfab86bdb0ccb5ab8';

export function fetchCities(value) {
    return async dispatch => {
            dispatch({type: LOADING_SHOW, loading: true })

                const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&units=metric&appid=${API_KEY}`)
                const json = await response.json()
            setTimeout(() => {
                if(json.cod === '200'){
                    dispatch({type: FETCH_CITIES, payload: json })
                    dispatch({type: ERROR_SEARCH, error: false})
                    dispatch({type: LOADING_HIDE, loading: false })
                } else{
                    dispatch({type: ERROR_SEARCH, error: true})
                    dispatch({type: LOADING_HIDE, loading: false })
                }
            }, 600)
    }
}




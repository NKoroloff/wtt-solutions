import {ERROR_SEARCH, FETCH_CITIES, LOADING_HIDE, LOADING_SHOW} from "../actions/actionTypes";

const initialState = {
    fetchedCities: [],
    error: null,
    loading: false
}

export const  cityReducer = (state = initialState , action) => {
    switch(action.type){
        case FETCH_CITIES:
            return {...state, fetchedCities: [...state.fetchedCities , action.payload] ,}
        case ERROR_SEARCH:
            return {...state, error: action.error}
        case LOADING_HIDE:
            return {...state, loading: false}
        case LOADING_SHOW:
            return {...state, loading: true}
        default:
            return state
    }
}
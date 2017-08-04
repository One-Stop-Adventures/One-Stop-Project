import axios from 'axios';

const API_KEY = 'BE3CC0CE-4F5F-45B7-86AD-EE2ACEC43924'
const BASE_URL = 'https://developer.nps.gov/api/v0/parks?fields=name,images,addresses'

const initialState = {
    park_info: []
}

const FETCH_PARKS = 'parks/FETCH_PARKS'
const FETCH_PARKS_PENDING = 'parks/FETCH_PARKS_PENDING'
const FETCH_PARKS_REJECT = 'parks/FETCH_PARKS_REJECT'
const FETCH_PARKS_FULFILLED = 'parks/FETCH_PARKS_FULFILLED'

export function fetchParks( term ){

    const parkPromise = axios.get(`/api/tacos/${term}`)
    return {
        type: FETCH_PARKS,
        payload: parkPromise
    }

}


export default function npsReducer( state=initialState, action ){
    switch( action.type ) {
        case FETCH_PARKS_FULFILLED:
            console.log(action.payload)
            return Object.assign({}, state, {park_info: action.payload.data.data})
        default:
            return state
    }
}
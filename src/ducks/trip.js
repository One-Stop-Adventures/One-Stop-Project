import axios from 'axios'

const initialState = {
  trips: [],
  trip: []
}
//
// const ADD_TRIP = 'trip/ADD_TRIP'
const FETCH_TRIPS = 'trip/FETCH_TRIPS'
const FETCH_TRIPS_PENDING = 'trip/FETCH_TRIPS_PENDING'
const FETCH_TRIPS_REJECTED = 'trip/FETCH_TRIPS_REJECTED'
const FETCH_TRIPS_FULFILLED = 'trip/FETCH_TRIPS_FULFILLED'
const FETCH_TRIP = 'trip/FETCH_TRIP'
const FETCH_TRIP_PENDING = 'trip/FETCH_TRIP_PENDING'
const FETCH_TRIP_REJECTED = 'trip/FETCH_TRIP_REJECTED'
const FETCH_TRIP_FULFILLED = 'trip/FETCH_TRIP_FULFILLED'

export function addTrip(trip, id){
  return axios.post(`/api/user/${id}/trips`, {
    trip_name: trip.trip_name,
    description: trip.description
  })
}

export function fetchTrips(id){
  console.log(id)
  const tripListPromise = axios.get(`/api/user/${id}/trips`)
  return{
    type: FETCH_TRIPS,
    payload: tripListPromise
  }
}

export function fetchTrip(id){
  const tripPromise = axios.get(`/api/dashboard/${id}`)
  return{
    type: FETCH_TRIPS,
    payload: tripPromise
  }
}

export default function tripReducer(state=initialState, action){
  switch(action.type){
    case FETCH_TRIPS_FULFILLED:
      return Object.assign({}, state, {trips: action.payload.data})
    case FETCH_TRIPS_FULFILLED:
      console.log(action.payload.data)
      return Object.assign({}, state, {trip: action.payload.data})
    default:
      return state
  }
}

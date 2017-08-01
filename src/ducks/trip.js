import axios from 'axios'

const initialState = {
  trips: []
}
//
// const ADD_TRIP = 'trip/ADD_TRIP'
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
    type: FETCH_TRIP,
    payload: tripListPromise
  }
}

export function fetchTrip(id){
  const tripPromise = axios.get(`/api/dashboard/${id}`)
  return{
    type: FETCH_TRIP,
    payload: tripPromise
  }
}

export default function tripReducer(state=initialState, action){
  switch(action.type){
    case FETCH_TRIP_FULFILLED:
      console.log(action.payload)
      return Object.assign({}, state, {trips: action.payload.data})
    default:
      return state
  }
}

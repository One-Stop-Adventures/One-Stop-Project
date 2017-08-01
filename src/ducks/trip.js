import axios from 'axios'

// const initialState = {
//   tripDetails: {}
// }
//
// const ADD_TRIP = 'trip/ADD_TRIP'


export function addTrip(trip, id){
  console.log(trip, id)
  return axios.post(`/api/user/${id}/trips`, {
    trip_name: trip.trip_name,
    description: trip.description
  })
}

const initialState = {
  data: {}
}

const FETCH_WEATHER = 'weather/FETCH_WEATHER'
const FETCH_WEATHER_PENDING = 'weather/FETCH_WEATHER_PENDING'
const FETCH_WEATHER_REJECTED = 'weather/FETCH_WEATHER_REJECTED'
const FETCH_WEATHER_FULFILLED = 'weather/FETCH_WEATHER_FULFILLED'

export function getWeather(promise){
  console.log(promise)
  return{
    type: FETCH_WEATHER,
    payload: promise
  }
}


export default function weatherReducer(state=initialState, action){
  switch(action.type){
    case FETCH_WEATHER_FULFILLED:
      return Object.assign({}, state, {data: action.payload.data})
    default:
      return state
  }
}

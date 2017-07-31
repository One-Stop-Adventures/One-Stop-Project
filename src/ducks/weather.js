import axios from 'axios'
const API_KEY = '5bb7b6e24297395376bf20d4b7adbc45'
const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`


export function fetchWeather(zip){
  return axios.get(`${BASE_URL}&zip=77379`)
}

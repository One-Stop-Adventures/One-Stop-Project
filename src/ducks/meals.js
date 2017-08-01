import axios from 'axios'

const initialState = {
  meals: []
}

const ADD_MEAL = 'meals/ADD_MEAL'
const DELETE_MEAL = 'meals/DELETE_MEAL'
const FETCH_MEAL = 'meals/FETCH_MEAL'
const FETCH_MEAL_PENDING = 'meals/FETCH_MEAL_PENDING'
const FETCH_MEAL_REJECTED = 'meals/FETCH_MEAL_REJECTED'
const FETCH_MEAL_FULFILLED = 'meals/FETCH_MEAL_FULFILLED'

export function addMeal(meal, id){
  axios.post(`/api/dashboard/${id}/meal`,{
    meal: meal
  })
  return{
    type: ADD_MEAL,
    payload: meal
  }
}

export function fetchMeal(id){
  const mealPromise = axios.get(`/api/dashboard/${id}/meal`)
  return{
    type: FETCH_MEAL,
    payload: mealPromise
  }
}

export function deleteMeal(id, index){
  axios.delete(`/api/dashboard/meal/${id}`)
  return{
    type: DELETE_MEAL,
    payload: index
  }
}

export default function mealReducer(state=initialState, action){
  switch(action.type){
  case ADD_MEAL:
    return Object.assign({}, state, {meals: [...state.meals, action.payload]})
  case DELETE_MEAL:
    console.log(action.payload)
    return Object.assign({}, state, {meals: [...state.meals.slice(0, action.payload), ...state.meals.slice(action.payload + 1)]})
  case FETCH_MEAL_FULFILLED:
    return Object.assign({}, state, {meals: action.payload.data.map(meal=>{return {day: meal.meal_day, breakfast: meal.breakfast, lunch: meal.lunch, dinner: meal.dinner, snack: meal.snack, id: meal.id}})})
  default:
    return state
  }
}

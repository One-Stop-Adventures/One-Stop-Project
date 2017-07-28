const initialState = {
  meals: []
}

const ADD_MEAL = 'meals/ADD_MEAL'

export function addMeal(meal){
  return{
    type: ADD_MEAL,
    payload: meal
  }
}

export default function mealReducer(state=initialState, action){
  switch(action.type){
  case ADD_MEAL:
    return Object.assign({}, state, {meals: [...state.meals, action.payload]})
  default:
    return state
  }
}

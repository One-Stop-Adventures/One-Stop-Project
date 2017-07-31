const initialState = {
  items: []
}

const ADD_ITEM = 'todo/ADD_ITEM'
const DELETE_ITEM = 'todo/DELETE_ITEM'
const FETCH_TODO = 'weather/FETCH_TODO'
const FETCH_TODO_PENDING = 'weather/FETCH_TODO_PENDING'
const FETCH_TODO_REJECTED = 'weather/FETCH_TODO_REJECTED'
const FETCH_TODO_FULFILLED = 'weather/FETCH_TODO_FULFILLED'

export function addItem(item){
  return{
    type: ADD_ITEM,
    payload: item
  }
}
export function deleteItem(item){
  console.log(item)
  return{
    type: DELETE_ITEM,
    payload: item.index
  }
}
export function fetchTodo(promise){
  return{
    type: FETCH_TODO,
    payload: promise
  }
}

export default function todoReducer(state=initialState, action){
  switch(action.type){
    case ADD_ITEM:
      return Object.assign({}, state, {items: [...state.items, action.payload]})
    case DELETE_ITEM:
      return Object.assign({}, state, {items: [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1)]})
    case FETCH_TODO_FULFILLED:
      console.log(action.payload)
      return Object.assign({}, state, {items: action.payload.data.map(item=>{return item.item})})
    default:
      return state
  }
}

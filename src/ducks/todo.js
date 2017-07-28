const initialState = {
  items: []
}

const ADD_ITEM = 'todo/ADD_ITEM'
const DELETE_ITEM = 'todo/DELETE_ITEM'

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

export default function todoReducer(state=initialState, action){
  switch(action.type){
    case ADD_ITEM:
      return Object.assign({}, state, {items: [...state.items, action.payload]})
    case DELETE_ITEM:
      return Object.assign({}, state, {items: [...state.items.slice(0, action.payload), ...state.items.slice(action.payload + 1)]})
    default:
      return state
  }
}

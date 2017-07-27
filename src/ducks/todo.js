const initialState = {
  items: []
}

const ADD_ITEM = 'todo/ADD_ITEM'

export function addItem(item){
  return{
    type: ADD_ITEM,
    payload: item
  }
}

export default function todoReducer(state=initialState, action){
  switch(action.type){
    case ADD_ITEM:
    return Object.assign({}, state, {items: [...state.items, action.payload]})
    default:
    return state
  }
}

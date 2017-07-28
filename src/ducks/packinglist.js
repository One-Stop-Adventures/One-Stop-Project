const initialState = {
  packingItems: []
}

const ADD_ITEM = 'packinglist/ADD_ITEM'
const DELETE_ITEM = 'packinglist/DELETE_ITEM'

export function addPackingItem(item){
  return{
    type: ADD_ITEM,
    payload: item
  }
}

export function deletePackingItem(item){
  console.log(item)
  return{
    type: DELETE_ITEM,
    payload: item.index
  }
}


export default function packingListReducer(state=initialState, action){
  switch(action.type){
    case ADD_ITEM:
      return Object.assign({}, state, {packingItems: [...state.packingItems, action.payload]})
    case DELETE_ITEM:
        return Object.assign({}, state, {packingItems: [...state.packingItems.slice(0, action.payload), ...state.packingItems.slice(action.payload + 1)]})
    default:
      return state
  }
}

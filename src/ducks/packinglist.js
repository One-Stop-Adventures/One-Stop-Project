const initialState = {
  packingItems: []
}

const ADD_ITEM = 'packinglist/ADD_ITEM'

export function addPackingItem(item){
  return{
    type: ADD_ITEM,
    payload: item
  }
}

export default function packingListReducer(state=initialState, action){
  switch(action.type){
    case ADD_ITEM:
      return Object.assign({}, state, {packingItems: [...state.packingItems, action.payload]})
    default:
      return state
  }
}

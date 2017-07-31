const initialState = {
  packingItems: []
}

const ADD_ITEM = 'packinglist/ADD_ITEM'
const DELETE_ITEM = 'packinglist/DELETE_ITEM'
const FETCH_PACKING = 'packinglist/FETCH_PACKING'
const FETCH_PACKING_PENDING = 'packinglist/FETCH_PACKING_PENDING'
const FETCH_PACKING_REJECTED = 'packinglist/FETCH_PACKING_REJECTED'
const FETCH_PACKING_FULFILLED = 'packinglist/FETCH_PACKING_FULFILLED'

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

export function fetchPackingItem(promise){
  console.log(promise)
  return{
    type: FETCH_PACKING,
    payload: promise
  }
}


export default function packingListReducer(state=initialState, action){
  switch(action.type){
    case ADD_ITEM:
      return Object.assign({}, state, {packingItems: [...state.packingItems, action.payload]})
    case DELETE_ITEM:
        return Object.assign({}, state, {packingItems: [...state.packingItems.slice(0, action.payload), ...state.packingItems.slice(action.payload + 1)]})
    case FETCH_PACKING_FULFILLED:
          console.log(action.payload)
          return Object.assign({}, state, {packingItems: action.payload.data.map(item=>{return {item: item.item, id: item.id}})})
    default:
      return state
  }
}

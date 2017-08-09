import axios from 'axios'

const initialState = {
  log: []
}

const FETCH_LOG = 'log/FETCH_LOG'
const FETCH_LOG_PENDING = 'log/FETCH_LOG_PENDING'
const FETCH_LOG_REJECTED = 'log/FETCH_LOG_REJECTED'
const FETCH_LOG_FULFILLED = 'log/FETCH_LOG_FULFILLED'

export function fetchLog(id){
  const logPromise = axios.get(`/api/log/${id}`)
  return{
    type: FETCH_LOG,
    payload: logPromise
  }
}

export default function logReducer(state=initialState, action){
  switch(action.type){
    case FETCH_LOG_FULFILLED:
    console.log(action.payload.data)
      return Object.assign({}, state, {log: action.payload.data})
    default:
      return state;
  }
}

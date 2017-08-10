import axios from 'axios'

const initialState ={
    user: [],
    logs: [],
    pic: []
}


const FETCH_USER = 'profile/FETCH_USER'
const FETCH_USER_PENDING = 'profile/FETCH_USER_PENDING'
const FETCH_USER_REJECTED = 'profile/FETCH_USER_REJECTED'
const FETCH_USER_FULFILLED = 'profile/FETCH_USER_FULFILLED'
const FETCH_LOG = 'profile/FETCH_LOG'
const FETCH_LOG_PENDING = 'profile/FETCH_LOG_PENDING'
const FETCH_LOG_REJECTED = 'profile/FETCH_LOG_REJECTED'
const FETCH_LOG_FULFILLED = 'profile/FETCH_LOG_FULFILLED'
const EDIT_BIO = 'profile/EDIT_BIO'
const EDIT_PIC = 'profile/EDIT_PIC'
const EDIT_PIC_PENDING = 'profile/EDIT_PIC_PENDING'
const EDIT_PIC_REJECTED = 'profile/EDIT_PIC_REJECTED'
const EDIT_PIC_FULFILLED = 'profile/EDIT_PIC_FULFILLED'


export function fetchUser(id){
  const userPromise = axios.get(`/api/user/${id}`)
  return{
    type: FETCH_USER,
    payload: userPromise
  }
}

export function updateBio(id, bio){
  const bioPromise = axios.put(`/api/user/${id}`, bio)
  return{
    type: EDIT_BIO,
    payload: bioPromise
  }
}

export function fetchLog(id){
  const logPromise = axios.get(`/api/user/log/${id}`)
  return{
    type: FETCH_LOG,
    payload: logPromise
  }
}

export function createLog(trip){
  return axios.post('/api/user/log', trip)
}

export function editPic(img, id){
  const picPromise = axios.put(`/api/pic/${id}`, {img})
  return{
    type: EDIT_PIC,
    payload: picPromise
  }
}


export default function profileReducer(state=initialState, action){
    switch(action.type){
        case FETCH_USER_FULFILLED:
          return Object.assign({}, state, {user: action.payload.data[0]});
        case FETCH_LOG_FULFILLED:
          return Object.assign({}, state, {logs: action.payload.data})
        case EDIT_BIO:
          return state;
        case EDIT_PIC_FULFILLED:
          return Object.asign({}, state, {pic: action.payload.data})
        default:
            return state
   }
}

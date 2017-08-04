import axios from 'axios'

const initialState ={
    user: []
}


const FETCH_USER = 'profile/FETCH_USER'
const FETCH_USER_PENDING = 'profile/FETCH_USER_PENDING'
const FETCH_USER_REJECTED = 'profile/FETCH_USER_REJECTED'
const FETCH_USER_FULFILLED = 'profile/FETCH_USER_FULFILLED'
const EDIT_BIO = 'profile/EDIT_BIO'


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

export default function profileReducer(state=initialState, action){
    switch(action.type){
        case FETCH_USER_FULFILLED:
          return Object.assign({}, state, {user: action.payload.data})
        case EDIT_BIO:
          return state;
        default:
            return state
   }
}

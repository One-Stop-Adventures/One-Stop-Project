const initialState ={
    firstName: '',
    lastName: '',
    location: '',
    dob: '',
    bio: ''
}

const ADD_FIRST = 'profile/ADD_FIRST'
const ADD_LAST = 'profile/ADD_LAST'
const ADD_LOCATION = 'profile/ADD_LOCATION'
const ADD_DOB = 'profile/ADD_DOB'
const ADD_BIO = 'profile/ADD_BIO'

export function addFirst(firstName){
    console.log("firstName update", firstName)
    return{
        type: ADD_FIRST,
        payload: firstName
    }
}
export function addLast(lastName){
    console.log("lastName update", lastName)
    return{
        type: ADD_LAST,
        payload: lastName
    }
}
export function addLocation(location){
    console.log("location update", location)
    return{
        type: ADD_LOCATION,
        payload: location
    }
}
export function addDob(date){
    console.log("date update", date)
    return{
        type: ADD_DOB,
        payload: date
    }
}
export function addBio(bio){
    console.log("bio update", bio)
    return{
        type: ADD_BIO,
        payload: bio
        
    }
}

export default function profileReducer(state=initialState, action){
    switch(action.type){
        case ADD_FIRST:
            return Object.assign({}, state, {firstName: action.payload})
        case ADD_LAST:
            return Object.assign({}, state, {lastName: action.payload})
        case ADD_LOCATION:
            return Object.assign({}, state, {location: action.payload})    
        case ADD_DOB:
            return Object.assign({}, state, {dob: action.payload})
        case ADD_BIO:
            return Object.assign({}, state, {bio: action.payload})
        default:
            return state
   }
}
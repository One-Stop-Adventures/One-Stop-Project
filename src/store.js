import {createStore, combineReducers} from 'redux'


import todo from './ducks/todo'
import packinglist from './ducks/packinglist'
import meals from './ducks/meals'

export default createStore(combineReducers({todo, packinglist, meals}))

import {createStore, combineReducers} from 'redux'


import todo from './ducks/todo'
import packinglist from './ducks/packinglist'

export default createStore(combineReducers({todo, packinglist}))

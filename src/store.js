import {createStore, combineReducers, applyMiddleware} from 'redux'

import promiseMiddleware from 'redux-promise-middleware'

import todo from './ducks/todo'
import packinglist from './ducks/packinglist'
import meals from './ducks/meals'
import profile from './ducks/profile_reducer'
import trip from './ducks/trip'
import parks from './ducks/nps_reducer'
import tripLog from './ducks/log_reducer'


export default createStore(combineReducers({todo, packinglist, meals, profile, trip, parks, tripLog}), {}, applyMiddleware(promiseMiddleware()))

import {createStore, combineReducers, applyMiddleware} from 'redux'

import promiseMiddleware from 'redux-promise-middleware'

import todo from './ducks/todo'
import packinglist from './ducks/packinglist'
import meals from './ducks/meals'
import weather from './ducks/weather_reducer'
import profile from './ducks/profile_reducer'

export default createStore(combineReducers({todo, packinglist, meals, weather, profile}), {}, applyMiddleware(promiseMiddleware()))


import { combineReducers, createStore } from 'redux'
import loading from './reducers/loading'
import test from './reducers/test'

var store = createStore(
    combineReducers({ test, loading })
);

export default store;
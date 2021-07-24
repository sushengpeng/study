
import { combineReducers, createStore } from 'redux'
import loading from './loading'
import test from './test'

var store = createStore(
    combineReducers({ test, loading })
);

export default store;
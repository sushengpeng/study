import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

const initialState = {
  number: 0
}
const reduxDemo = handleActions({
  'add number'(state, action) {
    const number = state.number
    return { number: number }
  }
}, initialState)

const rootReducer = combineReducers({
  routing,
  config: (state = {}) => state,
  ...reduxDemo
})

export default rootReducer

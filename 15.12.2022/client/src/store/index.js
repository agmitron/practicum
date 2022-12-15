import { createStore, combineReducers } from 'redux'
import shop from './shop/reducer'
import user from './user/reducer'

const reducers = combineReducers({
  shop,
  user
})

export default createStore(reducers)
import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import shop from './shop/reducer'
import user from './user/reducer'
import thunk from 'redux-thunk'
import mySaga from './saga'
const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
  shop,
  user
})

const store = createStore(reducers, applyMiddleware(thunk, sagaMiddleware))
sagaMiddleware.run(mySaga)
export default store
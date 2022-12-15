import { takeLatest } from 'redux-saga/effects'
import addItem from './shop/add-item'

function* mySaga() {
  yield takeLatest("*SHOP_ADD_ITEM", addItem)
}

export default mySaga
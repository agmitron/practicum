import { call, put, select } from 'redux-saga/effects'

const createItem = (data) => fetch('http://localhost:3001', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'content-type': 'application/json'
  }
})

const addItem = function* ({ payload }) {
  try {
    console.log('starting saga...')
    // yield put({ type: 'SHOP_SET_LOADER', payload: { loader: true }})
    const { item: { img, price, title } } = payload
    
    const data = yield call(createItem, { img, price, title})
    const dataParsed = yield data.json()
    
    const cart = yield select(addItem.selectors.cart)
    console.log({ cart })
    yield put({ type: 'SHOP_ADD_ITEM', payload: { item: dataParsed }})
    // yield put({ type: 'SHOP_SET_LOADER', payload: { loader: false }})
    console.log('finishing saga...')
  } catch(err) {
    console.error(err)
  }
}
addItem.selectors = {
  cart: ({ user: { cart }}) => cart
}

export default addItem
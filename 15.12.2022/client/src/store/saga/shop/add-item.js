import { call, put } from 'redux-saga/effects'


const createItem = (data) => fetch('http://localhost:3001', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: {
    'content-type': 'application/json'
  }
})

function* addItem({ payload: { item } }) {
  console.log({ item })
  const data = yield call(createItem, item)
  const dataParsed = yield data.json()
  yield put({ type: 'SHOP_ADD_ITEM', payload: { item: dataParsed } })
  console.log({ data })
}

export default addItem
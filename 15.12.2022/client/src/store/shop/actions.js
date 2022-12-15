export function addItemSaga(item) {
  return {
    type: '*SHOP_ADD_ITEM',
    payload: { item }
  }
}

export function addItem(item) {
  return {
    type: 'SHOP_ADD_ITEM',
    payload: { item }
  }
}

export function deleteItem(id) {
  return {
    type: 'SHOP_DELETE_ITEM',
    payload: { id }
  }
}

export function addItems(items) {
  return {
    type: 'SHOP_ADD_ITEMS',
    payload: { items }
  }
}

// async actions 

export function getAllItems() {
  return async (dispatch) => {
    const data = await fetch('http://localhost:3001')
    const dataParsed = await data.json()
    dispatch(addItems(dataParsed))
  }
}


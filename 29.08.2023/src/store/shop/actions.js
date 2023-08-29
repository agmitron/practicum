export function shopAddItemSaga(item) {
  return {
    type: '*SHOP_ADD_ITEM',
    payload: { item }
  }
}

export function shopAddItem(item) {
  return {
    type: 'SHOP_ADD_ITEM',
    payload: { item }
  }
}

export function shopDeleteItem(id) {
  return {
    type: 'SHOP_DELETE_ITEM',
    payload: { id }
  }
}

export function shopAddItems(items) {
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
    dispatch(shopAddItems(dataParsed))
  }
}
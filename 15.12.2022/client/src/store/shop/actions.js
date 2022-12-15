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
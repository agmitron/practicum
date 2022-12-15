// export function addItem(item) {
//   return {
//     type: 'USER_ADD_CART_ITEM',
//     payload: { item }
//   }
// }

import { createAction } from 'redux-actions'

export const addItem = createAction('USER_ADD_CART_ITEM')

// export function cartAddItem(item) {
//   return {
//     type: 'USER_ADD_ITEM',
//     payload: { item }
//   }
// }

import { createAction } from 'redux-actions'

export const cartAddItem = createAction('USER_ADD_ITEM')
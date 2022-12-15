import { handleActions } from 'redux-actions'
import { addItem } from './actions'

const initialState = {
  tax: 13,
  cart: []
}

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'USER_ADD_CART_ITEM':
//       return {
//         ...state,
//         cart: [...state.cart, action.payload.item]
//       }
//     default:
//       return state
//   }
// }

const cartAddItemHandler = (state = initialState, { payload: item }) => {

  console.log({ item })
  return {
    ...state,
    cart: [...state.cart, item]
  }
}

const userReducer = handleActions({
  [addItem]: cartAddItemHandler
}, initialState)

export default userReducer
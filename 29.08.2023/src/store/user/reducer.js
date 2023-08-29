import { cartAddItem } from './actions'
import { handleActions } from 'redux-actions'
const initialState = {
  tax: 13,
  cart: []
}

// const userReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'USER_ADD_ITEM':
//       return {
//         ...state,
//         cart: [...state.cart, action.payload.item]
//       }
//     default:
//       return state
//   }
// }

const cartAddItemHandler = (state, { payload }) => {
  return {
    ...state,
    cart: [...state.cart, payload]
  }
}

const userReducer = handleActions({
  [cartAddItem]: cartAddItemHandler
}, initialState)



export default userReducer
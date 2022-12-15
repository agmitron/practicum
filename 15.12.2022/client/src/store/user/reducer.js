const initialState = {
  tax: 13,
  cart: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_ADD_CART_ITEM':
      return {
        ...state,
        cart: [...state.cart, action.payload.item]
      }
    default:
      return state
  }
}

export default userReducer
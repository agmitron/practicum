const initialState = {
  data: []
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SHOP_ADD_ITEM':
      return {
        ...state,
        data: [...state.data, action.payload.item]
      }
    case 'SHOP_DELETE_ITEM':
      return {
        ...state,
        data: state.data.filter(item => item.id !== action.payload.id)
      }
    case 'SHOP_ADD_ITEMS':
      return {
        ...state,
        data: action.payload.items
      }
    default:
      return state
  }
}

export default shopReducer
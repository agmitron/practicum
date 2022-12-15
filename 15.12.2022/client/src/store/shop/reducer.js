const initialState = { data: [
  { title: 'Vegemite', price: 1.39, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWOSIPZtdfcujVO0RiFv29KWj1WwOTxnqYdA&usqp=CAU' },
  { title: 'Buzz Lightyear', price: 11.99, img: 'https://static.wikia.nocookie.net/disney/images/7/74/Profile_-_Buzz_Lightyear.jpeg' },
  { title: 'Boston Celtics Vintage Cap', price: 2.50, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZzWivcwCbCtTsIMaKHTySYBx8hKkCMLor9g&usqp=CAU' },
  { title: 'Mario Kart Vintage', price: 2.19, img: 'https://sc01.alicdn.com/kf/Hcf5a987813f64603a231d52fe32c241en/234774818/Hcf5a987813f64603a231d52fe32c241en.jpg_.webp' }
]}

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
    default:
      return state
  }
}

export default shopReducer
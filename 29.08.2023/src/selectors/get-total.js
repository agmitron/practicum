import { createSelector } from 'reselect'

const currentTax = userState => userState.tax 
const currentCart = userState => userState.cart


const subtotal = createSelector(
  currentCart,
  (cart) => {
    return cart.reduce((sum, item) => {
      sum = sum + item.price
      return sum
    }, 0)
  }
)

const totalTax = createSelector(
  currentTax,
  subtotal,
  (tax, subtotal) => {
    return subtotal * (tax / 100)
  }
)

const totalPrice = createSelector(
  totalTax,
  subtotal,
  (tax, subtotal) => {
    console.log('calculating...')
    return tax + subtotal
  }
)

export default totalPrice

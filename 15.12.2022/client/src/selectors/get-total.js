import { createSelector } from 'reselect'

const currentTax = state => state.tax
const currentCart = state => state.cart

const subTotal = createSelector(
  currentCart,
  (cart) => {
    return cart.reduce((sum, item) => sum + item.price, 0)
  }
)

const totalTax = createSelector(
  currentTax,
  subTotal,
  (tax, subtotal) => {
    return subtotal * (tax / 100)
  }
)

const totalPrice = createSelector(
  totalTax,
  subTotal,
  (tax, subtotal) => {
    console.log('calculating...')
    return tax + subtotal
  }
)

export default totalPrice
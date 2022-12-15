import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Good from './components/good'

import { addItemSaga, deleteItem, getAllItems } from './store/shop/actions'
import { addItem as addCartItem } from './store/user/actions'
import { useEffect } from 'react';
import totalPrice from './selectors/get-total'

function App({ items, addItem, cart, addCartItem, getAllItems, totalPrice }) {
  const submit = evt => {
    evt.preventDefault()
    const form = evt.target
    const { title, price, img } = form.elements
    addItem({
      title: title.value,
      img: img.value,
      price: price.value
    })
  }

  useEffect(() => {
    getAllItems()
  }, [getAllItems])

  console.log({ totalPrice })

  return (
    <div className="App">
      <header className="AppHeader">
        <h1 >SUPER MEGA STORE</h1>
        <div>Cart Items: {cart.length}</div>
      </header>
      <main>
        {items.map(item => {
          return <Good {...item} onClick={() => addCartItem(item)} />
        })}
      </main>
      <form className='AppForm' onSubmit={submit}>
        <input name='title' placeholder='Title' />
        <input name='img' placeholder='IMG' />
        <input name='price' placeholder='Price' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

const mapStateToProps = ({ shop, user }) => {
  return {
    items: shop.data,
    cart: user.cart,
    totalPrice: totalPrice(user)
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItemSaga(item))
    },
    onDecrement: (id) => {
      dispatch(deleteItem(id))
    },
    addCartItem: (item) => {
      dispatch(addCartItem(item))
    },
    getAllItems: () => {
      dispatch(getAllItems())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

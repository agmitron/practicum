import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import Good from './components/good'

import { addItem, deleteItem } from './store/shop/actions'

function App({ items, addItem, cart }) {
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
  return (
    <div className="App">
      <header className="AppHeader">
        <h1 >SUPER MEGA STORE</h1>
        <div>Cart Items: {cart.length}</div>
      </header>
      <main>
        {items.map(item => {
          return <Good {...item} />
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
    cart: user.cart
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item))
    },
    onDecrement: (id) => {
      dispatch(deleteItem(id))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

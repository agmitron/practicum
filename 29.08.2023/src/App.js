import './App.css';
import { connect } from 'react-redux'
import Good from './components/good'
import { useEffect } from 'react'
import { shopAddItemSaga, getAllItems } from './store/shop/actions'
import { cartAddItem } from './store/user/actions'
import totalPrice from './selectors/get-total'

function App({ items, shopAddItem, cartAddItem, cart, getAllItems, totalPrice }) {
  const submit = evt => {
    evt.preventDefault()
    const form = evt.target
    const { title, price, img } = form.elements
    shopAddItem({
      title: title.value,
      img: img.value,
      price: price.value
    })
  }

  console.log({ totalPrice })
  useEffect(_ => {
    getAllItems()
  }, [])

  return (
    <div className="App">
      <header className="AppHeader">
        <h1 >SUPER MEGA STORE</h1>
        <div>Cart Items: {cart.length}</div>
      </header>
      <main>
        {items.map(item => {
          return <Good {...item} key={item.title} onClick={_ => cartAddItem(item)}/>
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
    shopAddItem: (item) => {
      dispatch(shopAddItemSaga(item))
    },
    cartAddItem: (item) => {
      dispatch(cartAddItem(item))
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

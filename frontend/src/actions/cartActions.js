import axios from 'axios'
import Cookies from 'js-cookie'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants'

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${productId}`)
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty
      }
    })
    const { cart: { cartItems }} = getState()
    Cookies.set('cartItems', JSON.stringify(cartItems))
  } catch (e) {

  }
}

export const removeFromCart = (productId) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: productId
  })
}
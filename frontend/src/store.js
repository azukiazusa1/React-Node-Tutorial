import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Cookies from 'js-cookie'
import { cartReducer } from './reducers/cardReducers'
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { userSigninReducer } from './reducers/userReducers'

const cartItems = Cookies.getJSON('cartItems') || []

const initialState = { 
  cart: {cartItems}
}
const reducer = combineReducers({
  productList: productListReducer,
  producteDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer 
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store
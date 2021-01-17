import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import Cookies from 'js-cookie'
import { cartReducer } from './reducers/cardReducers'
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { userRegisterReducer, userSigninReducer } from './reducers/userReducers'

const cartItems = Cookies.getJSON('cartItems') || []
const userInfo = Cookies.getJSON('userInfo') || null

const initialState = { 
  cart: { cartItems },
  userSignin: { userInfo }
}
const reducer = combineReducers({
  productList: productListReducer,
  producteDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)))

export default store
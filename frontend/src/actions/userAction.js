import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_REGISTER_SUCCESS, USER_REGISTER_REQUEST, USER_REGISTER_FAIL } from "../constants/userConstants"
import axios from 'axios'
import Cookies from 'js-cookie'

const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: {email, password}
  })

  try {
    const { data } = await axios.post('/api/users/signin', { email, password })
    console.log(data)
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data
    })
    Cookies.set('userInfo', JSON.stringify(data))
  } catch (e) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: e.message
    })
  }
}

const register = (name, email, password) => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_REQUEST,
    payload: {email, password}
  })

  try {
    const { data } = await axios.post('/api/users/register', { name, email, password })
    console.log(data)
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data
    })
    Cookies.set('userInfo', JSON.stringify(data))
  } catch (e) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: e.message
    })
  }
}

export { signin, register }
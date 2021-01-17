import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userAction'

function RegisterScreen (props) {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const userRegister = useSelector(state => state.userRegister)
  const { loading, userInfo, error } = userRegister
  const dispatch = useDispatch()

  useEffect(() => {
    if (userInfo) {
      props.history.push('/')
    }
    return (() => {

    })
  }, [userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(register(name, email, password))
  }
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h3>Register</h3>
          </li>
          <li>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </li>
          <li>
            <label htmlFor="name">
              Name
            </label>
            <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} />
          </li>
          <li>
            <label htmlFor="email">
              Email
            </label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          </li>
          <li>
            <label htmlFor="password">
              Password
            </label>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          </li>
          <li>
            <label htmlFor="repassword">
              Password
            </label>
            <input type="password" name="repassword" id="repassword" onChange={(e) => setRePassword(e.target.value)} />
          </li>
          <li>
            <button type="submit" className="button primary" onClick={submitHandler}>Register</button>
          </li>
          <li>
            Already have an account? <Link to="/signin">Sing-In</Link>
          </li>
        </ul>
      </form>
    </div>
  )
}

export default RegisterScreen

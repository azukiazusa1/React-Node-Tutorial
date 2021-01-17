import express from 'express'
import User from '../models/userModel'
import { getToken } from '../utils'

const router = express.Router()

router.post('/signin', async(req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password
  })
  if (signinUser) {
    res.json({
      ...signinUser,
      token: getToken(user)
    })
  } else {
    res.status(401).send({
      msg: 'Invalid Email or Password'
    })
  }
})

router.get('/createadmin', async (req, res) => {
  try {
    const user = new User({
      name: 'Basir',
      email: 'basir@gmail.com',
      password: '1234',
      isAdmin: true
    })
    
    const newUser = await user.save()
    res.json(newUser)
  } catch (e) {
    res.send({
      msg: e.message
    })
  }
})

export default router
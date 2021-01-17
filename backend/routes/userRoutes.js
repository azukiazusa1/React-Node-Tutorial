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
      _id: signinUser._id,
      name: signinUser.name,
      email: signinUser.email,
      isAdmin: signinUser.isAdmin,
      token: getToken(signinUser)
    })
  } else {
    res.status(401).send({
      msg: 'Invalid Email or Password'
    })
  }
})

router.post('/register', async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  })
  const newUser = await user.save()
  if (newUser) {
    res.json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: getToken(newUser)
    })
  } else {
    res.status(400).send({
      msg: 'Invalid User Data'
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
    res.json(user)
  } catch (e) {
    res.send({
      msg: e.message
    })
  }
})

export default router
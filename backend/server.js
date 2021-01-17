import express from 'express'
import { data } from './data'
import dotenv from 'dotenv'
import config from './config'
import mongoose from 'mongoose'
import userRoute from './routes/userRoutes'
import bodyParser from 'body-parser'

dotenv.config()

const mongodbUrl = config.MONGODB_URL
mongoose.connect(mongodbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(e => console.log(e))

const app = express()
app.use(bodyParser)
app.use('/api/users', userRoute)
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id
  const product = data.products.find(v => v._id === productId)

  if (product) {
    res.send(product)
  } else {
    res.status(404).send({
      msg: 'Product Not Found.'
    })
  }
})
app.get('/api/products', (req, res) => {
  res.send(data.products)
})

app.listen(5000, () => { console.log('server started at http://localhost:5000')})
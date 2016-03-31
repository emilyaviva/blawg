const mongoose = require('mongoose')
const Entry = require('./app/models/entry-model')

const express = require('express')
const bodyParser = require('body-parser')

const isDeveloping = process.env.NODE_ENV !== 'production'
const port = isDeveloping ? 3000 : process.env.PORT

const MONGO_USER = process.env.MONGO_USER || 'admin'
const MONGO_PASS = process.env.MONGO_PASS || 'admin'

const app = express()

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error(err)
  }
  console.info(`🌎  Listening on port ${port}...`)
  mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASS}@ds019028.mlab.com:19028/blawg-data`)
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'Mongoose connection error:'))
  db.once('open', () => console.info('Mongoose connected to MongoDB'))
})

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  next()
})

const r = express.Router()
app.use('/', r)

r.use(bodyParser.json())

r.get('/entries', (req, res) => {
  Entry.find((err, data) => {
    if (err) {
      return console.error(err)
    }
    res.json(data)
  })
})

r.post('/entries', (req, res) => {
  res.json(req.body)
})

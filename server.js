const express = require('express')
const bodyParser = require('body-parser')
const Firebase = require('Firebase')

const isDeveloping = process.env.NODE_ENV !== 'production'
const port = isDeveloping ? 3000 : process.env.PORT
const db = new Firebase('https://shining-heat-8334.firebaseio.com/')

const app = express()
const data = require('./data/dummy.json')

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error(err)
  }
  console.info(`🌎  Listening on port ${port}...`)
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
  console.info('GET request made')
  res.json(data)
})

r.post('/', (req, res) => {
  db.set({
    yolo2: 'swag2',
    yoloList: ['swag3', 'swag4', 3 + 8, Math.PI]
  }).then(res.send('success'))
})

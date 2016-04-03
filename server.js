const mongoose = require('mongoose')
const Entry = require('./app/models/entry-model')

const express = require('express')
const bodyParser = require('body-parser')

const port = process.env.PORT || 3000

const MONGO_USER = process.env.MONGO_USER || 'admin'
const MONGO_PASS = process.env.MONGO_PASS || 'admin'
const MONGO_URL =  `mongodb://${MONGO_USER}:${MONGO_PASS}@${process.env.MONGO_URL || 'localhost'}`

const app = express()

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.error(err)
  }
  console.info(`🌎  Listening on port ${port}...`)
  mongoose.connect(MONGO_URL)
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
  Entry.find((err, doc) => {
    return err ? console.error(err) : res.json(doc)
  })
})

r.get('/entries/:id', (req, res) => {
  Entry.findOne({_id: req.params.id}, (err, doc) => {
    return err ? console.error(err) : res.json(doc)
  })
})

r.post('/entries', (req, res) => {
  if (!req.body.title || !req.body.body) {
    return res.json({success: false, msg: 'incomplete POST body'})
  }
  new Entry({
    title: req.body.title,
    tags: req.body.tags || [],
    draft: req.body.draft || false,
    body: req.body.body
  })
  .save((err, doc) => {
    if (err) {
      res.status(500).json({success: false, msg: 'server error'})
      return console.error(err)
    }
    res.json({success: true, newPostId: doc._id})
  })
})

r.delete('/entries/:id', (req, res) => {
  Entry.findOneAndRemove({_id: req.params.id}, (err, doc) => {
    return err ? console.error(err) : res.json({success: true})
  })
})

const mongoose = require('mongoose')

module.exports = mongoose.model('Entry', {
  title: String,
  date: {type: Date, default: Date.now},
  tags: [String],
  draft: Boolean,
  body: String
}, 'articles')

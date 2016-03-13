const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  name: {type: String, unique: true},

})

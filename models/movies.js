const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieModel = new Schema({
  title: String,
  gender: String,
  duration_minutes: Number,
  clasification: String
})

module.exports = mongoose.model('movies', movieModel)
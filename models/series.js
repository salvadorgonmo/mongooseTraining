const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serieModel = new Schema({
  title: String,
  gender: String,
  seasons: Number,
  clasification: String
})

module.exports = mongoose.model('serieModel', serieModel)
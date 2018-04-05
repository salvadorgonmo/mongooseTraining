const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serieModel = new Schema({
  title: String,
  gender: String,
  seasons: Number,
  clasification: string
})

module.exports = mongoose.model('serieModel', serieModel)
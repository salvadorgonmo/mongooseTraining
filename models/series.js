const mongoose = require('mongoose')
const Schema = mongoose.Schema

const serieModel = new Schema({
  title: String,
  gender: String,
  seasons: Number
})

module.exports = mongoose.model('serieModel', serieModel)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const documentalModel = new Schema({
  name: String,
  clasification: String,
  duration: Number
})

module.exports = mongoose.model('documentalModel', documentalModel)
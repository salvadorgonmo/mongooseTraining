const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountModel = new Schema({
  email: String,
  password: String,
  phone: String
})

module.exports = mongoose.model('accountModel', accountModel)
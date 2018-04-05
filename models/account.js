const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountModel = new Schema({
  email: String,
  password: String,
  phone: String,
  users: [{ type: Schema.Types.ObjectId, ref: 'userModel'}]
})

module.exports = mongoose.model('accountModel', accountModel)
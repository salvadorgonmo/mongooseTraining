const mongoose = require('mongoose')
const Schema = mongoose.Schema

const accountModel = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },
  phone: String,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'userModel'}]
})

module.exports = mongoose.model('accountModel', accountModel)
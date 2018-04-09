const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userModel = new Schema({
    name: String,
    type: String,
    account: { type: Schema.Types.ObjectId, ref: 'accountModel'}
})

module.exports = mongoose.model('userModel', userModel)
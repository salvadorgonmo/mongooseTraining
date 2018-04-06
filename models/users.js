const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userModel = new Schema({
    name: String,
    type: String
})

module.exports = mongoose.model('userModel', userModel)
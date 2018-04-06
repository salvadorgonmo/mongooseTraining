const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userModel = new Schema({´
    _id: Schema.Types.ObjectId,
    name: String,
    type: String
})

module.exports = mongoose.model('userModel', userModel)
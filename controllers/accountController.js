const AccountModel = require('../models/account')

const post = async (req, res) => {
    const newSchema = new AccountModel(req.body)
    await newSchema.save()
    res.json({newSchema})
}
  
const get = async (req, res) => {
    await AccountModel.find({})
    //res.json(result)
}
  
const update = async function (req, res) {
    await AccountModel.findOneAndUpdate({_id: req.params.id}, req.body)
    res.send()
}
  
const deleteOne = async function (req, res) {
    await AccountModel.findOneAndRemove({_id: req.params.id})
    res.send()
}
  
module.exports = {
    post,
    get,
    update,
    deleteOne
}
  
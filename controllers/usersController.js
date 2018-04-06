const UserModel = require('../models/users')

const post = async (req, res) => {
    const newSchema = new UserModel(req.body)
    await newSchema.save()
    res.json({newSchema})
  }
  
  const get = function (req, res) {
      UserModel.find({}).exec().then(function (result) {
      res.json({result})
    })
  }
  
  const update = async function (req, res) {
    await UserModel.findOneAndUpdate({_id: req.params.id}, req.body)
    res.send()
  }
  
  const deleteOne = async function (req, res) {
    await UserModel.findOneAndRemove({_id: req.params.id})
    res.send()
  }
  
  module.exports = {
    post,
    get,
    update,
    deleteOne
  }
  
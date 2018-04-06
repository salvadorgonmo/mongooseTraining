const UserModel = require('../models/users')
const accounModel = require('../models/account')

const post = async (req, res) => {
    const newSchema = new UserModel({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      name: req.body.type
    })
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

  const addUserToAccount = async function( id_account, user ) {
    let account = await accountModel.find({_id: id})
    account.users.push(user._id)
    accounModel.findOneAndUpdate({_id: id, account})
  }
  
  module.exports = {
    post,
    get,
    update,
    deleteOne
  }
  
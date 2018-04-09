const UserModel = require('../models/users')
const accounModel = require('../models/account')


const post = async (req, res) => {
    const newSchema = new UserModel({
      name: req.body.name,
      type: req.body.type,
      account: req.params.id
    })
    try {
      let saved = await newSchema.save()
      saved ? res.send(newSchema) : res.status(400).send({message: 'user error'})
    } catch (err) {
      console.log(err)
      res.status(500).send({message: 'error saving user'})
    }
  }
  
  const get = function (req, res) {
      let id_account = req.params.id
      UserModel.find({account: id_account} ).populate({path: 'account'}).exec((err, result) => {
        if(err){
          console.log(err)
          res.estatus(500).send({message: 'error in data data base'})
        }
        else{
          result.length > 0 ? res.send(result) : res.send({message: 'there is not users saved'})
        }
      })
  }
  
  const update = async function (req, res) {
    try{
      let userUpdated = await UserModel.findOneAndUpdate({_id: req.params.id}, req.body)
      userUpdated ? res.send({ message: 'update success'}) : res.status(400).send({ message: 'user error'})
    }catch(err){
      console.log(err)
      res.status(500).send({message: 'error updating user '})
    }
  }
  
  const deleteOne = async function (req, res) {
    try{
      let userDeleted = await UserModel.findOneAndRemove({_id: req.params.id})
      userDeleted ? res.send({ message: 'user ' +userDeleted.name+ ' deleted'}) : res.status(400).send({ message: 'user error'})
    }catch(err){
      console.log(err)
      res.status(500).send({message: 'error deleting user '})
    }
  }

  module.exports = {
    post,
    get,
    update,
    deleteOne
  }
  
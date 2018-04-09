const AccountModel = require('../models/account')

const post = async (req, res) => {
    const newSchema = new AccountModel(req.body)
     try{
        let saved = await newSchema.save()
        if(saved)
            res.send(newSchema)
        else
            res.status(400).send({message: 'account error'})
    }catch(err){
      console.log(err)
      res.status(500).send({message: 'error saving account '})
    }
}
  
const get = function (req, res) {
    AccountModel.find({}).exec((err, result) => {
        if(err){
          console.log(err)
          res.estatus(500).send({message: 'error in data data base'})
        }
        else{
            if(result.length > 0){
                //result = result.map( element => { return {email: element.email} })
                res.send(result)
            }
            else
                res.send({message: 'there is not accounts saved'})
        }
      })
}
  
const update = async function (req, res) {
    try{
        let updated = await AccountModel.findOneAndUpdate({_id: req.params.id}, req.body)
        if(updated){
            res.send({ message: 'account update success'})
        }
        else{
            res.status(400).send({message: 'cannot find account'})
        }
    }catch(err){
        console.log(err)
        res.status(500).send({message: 'update account internal error'})
    }
}
  
const deleteOne = async function (req, res) {
    try{
        let deleted = await AccountModel.findOneAndRemove({_id: req.params.id})
        if(deleted){
            res.send({ message: 'account '+deleted.email+' deleted'})
        }
        else{
            res.status(400).send({message: 'cannot find account'})
        }
    }catch(err){
        console.log(err)
        res.status(500).send({message: 'delete account internal error'})
    }
}
  
module.exports = {
    post,
    get,
    update,
    deleteOne
}
  
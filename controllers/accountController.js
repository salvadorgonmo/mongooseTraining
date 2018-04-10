const AccountModel = require('../models/account')

const post = async (req, res) => {
    const newSchema = new AccountModel(req.body)
    console.log(newSchema.users)
    await newSchema.save(function(err){
        if(err){
            res.status(500).send("Account not created")
        }else{
            res.json({newSchema})
        }
    })
}
  
const get = function (req, res) {
    AccountModel.find({}).exec().then(function (result) {
    res.json({result})
  }).catch(function(err){
    res.status(500).send(err)
  })
}
   
const update = async function (req, res) {
    await AccountModel.findOneAndUpdate({_id: req.params.id}, req.body, function(err){
        if(err){
            res.status(400).send("The account that you are trying to update doesn't exist")
        }
        else{
            res.send("Account updated")
        }
    })
}
  
const deleteOne = async function (req, res) {
    await AccountModel.findOneAndRemove({_id: req.params.id}, function(err){
        if(err){
            res.status(400).send("The account that you are trying to delete doesn't exist")
        }
        else{
            res.send("Account deleted")
        }
    })
}

const getOne = async function (req, res) {
    const account = await AccountModel.findOne({_id: req.params.id}, function(err){
        if(err){
            res.status(400).send("The account doesn't exist")
        }
    })
    res.send(account)    
}
  
module.exports = {
    post,
    get,
    update,
    deleteOne,
    getOne
}
  
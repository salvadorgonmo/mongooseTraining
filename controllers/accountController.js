const AccountModel = require('../models/account')

const post = async (req, res) => {
    if(req.body.email && req.body.password){
        var accountData = {
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone
        }

        console.log(accountData)

        //use schema.create to insert data into the db
        await AccountModel.create(accountData, function(err, account){
            console.log(account)
            if(err){
                console.log(err)
                return res.status(500).send("Something went wrong creating your account or the account already exist")
            }
            res.send("Account created")
        })
    }
    else{
        res.status(400).send("You should provide an email and a password")
    }
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
  
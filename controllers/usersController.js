const UserModel = require('../models/users')
const AccountModel = require('../models/account')

const post = async (req, res) => {
  //find the account to add the new user
  const account = await AccountModel.findOne({_id: req.params.account_id}, function(err){
    if(err){
      res.status(400).send("You are trying to add a new user in an account that doesn't exist")  
    }
  })
  //create the new user
  const newSchema = new UserModel(req.body)
  await newSchema.save(function(err){
    if(err){
      res.status(400).send("User not created")    
    }
  })
  //add the user to the account
  account.users.push(newSchema)
  //save the account
  await account.save(function(err){
    if(err){
      res.status(500).send("User no added to the account")  
    }
    else{
      res.json({newSchema})
    }
  })
}

const get = function (req, res) {
    AccountModel.findOne({_id: req.params.account_id}).populate('users').exec().then(function (result) { 
      console.log(result.users)
      res.json(result.users);
    }).catch(function(err){
      res.status(400).send("You are trying to get users from an account that doesn't exist")  
    })
}
  
const update = async function (req, res) {
  await UserModel.findOneAndUpdate({_id: req.params.id}, req.body,function(err){
    if(err){
      res.status(400).send("You are trying to update an user that doesn't exist")    
    }
    else{
      res.send("User updated")
    }
  })
}
  
const deleteOne = async function (req, res) {
  //find the account to remove the user reference
  const account = await AccountModel.findOne({_id: req.params.account_id},function(err){
    if(err){
      res.status(400).send("ERROR.This user is not related to this account or the account doesn't exist")  
    }
    else{
      //remove from users collection
      UserModel.findOneAndRemove({_id: req.params.id},function(err){
        if(err){
          res.status(400).send("This user doesn't exist")  
        }
      })
    }
  })
  //remove the user reference
  var index = account.users.indexOf(req.params.id)
  account.users.splice(index,1)
  //save the account
  await account.save(function(err){
      if(err){
        res.status(400).send("The user were not deleted from the account")
      }
      else{
        res.send("User deleted")
      }
    })
}
  
module.exports = {
  post,
  get,
  update,
  deleteOne
}

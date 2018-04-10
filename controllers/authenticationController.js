const AccountModel = require('../models/account')

const signin = async (req, res) => {
    if(req.body.email && req.body.password){
        var accountData = {
            email: req.body.email,
            password: req.body.password
        }

        //use schema.create to insert data into the db
        await AccountModel.create(accountData, function(err, account){
            if(err){
                res.status(500).send("Something went wrong creating your account")
            }
            else{
                return res.redirect('/login');
            }
        })
    }
    else{
        res.status(400).send("You should provide an email and a password")
    }
}

const login = async(req, res) => {
    await AccountModel.findOne({email: req.body.email}, function(err, account){
        if(err){
            res.status(500).send("Something went wrong looking for your account")
        }
        else{
            if(account){
                if(account.password === req.body.password){
                    req.session.userId = account._id;
                    res.redirect('/account/'+account._id);
                }
                else{
                    res.status(400).send("The password is incorrect")
                }
            }
            else{
                res.status(400).send("The account doesn't exist") 
            }
        }
    })
}

const logout = async(req, res) => {
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
          if(err) {
            res.status(500).send("Something went wrong trying to logout") 
          } 
          else {
            return res.redirect('/movie');
          }
        });
    }
}

//--------------------MIDDLEWARE-----------------------------------
function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    } 
    else {
        res.status(401).send("You must be logged in to view this page")
    }
  }
  

module.exports = {
    signin,
    login,
    logout,
    requiresLogin
}
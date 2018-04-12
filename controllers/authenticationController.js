const AccountModel = require('../models/account')

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

module.exports = {
    login,
    logout
}
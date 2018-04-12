function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    } 
    else {
        res.status(401).send("You must be logged in to view this page")
    }
  }
  
module.exports = {
    requiresLogin
}
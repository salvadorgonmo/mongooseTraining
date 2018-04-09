function isAuthenticated( req, res, next ) {
    if(req.headers.authorization )
        return next()
    res.status(400).send({ message: 'Authentication error' })
}

module.exports = {
    isAuthenticated
}
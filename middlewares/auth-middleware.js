function isAuthenticated( req, res, next ) {
    return req.headers.authorization ? next() : res.status(400).send({ message: 'Authentication error' })
}

module.exports = {
    isAuthenticated
}
const express = require('express')
const Router = express.Router()
const serieController = require('./controllers/seriesController')
const userController = require('./controllers/usersController')
const accountController = require('./controllers/accountController')

// series
const movieController = require('./controllers/moviesController')

//Serie Routes
Router.delete('/serie/:id', serieController.deleteOne)
Router.put('/serie/:id', serieController.update)
Router.post('/serie', serieController.post)
Router.get('/serie', serieController.get)

<<<<<<< HEAD
//Account Routes
=======
//Users Controllers 
Router.delete('/user/:id', userController.deleteOne)
Router.put('/user/:id', userController.update)
Router.post('/user', userController.post)
Router.get('/user', userController.get)
// account
>>>>>>> 6ff5ca6b0a406f30df23a46443a1d5b857abc2e0

Router.delete('/account/:id', accountController.deleteOne)
Router.put('/account/:id', accountController.update)
Router.post('/account', accountController.post)
Router.get('/account', accountController.get)

//Movie Routes
Router.delete('/movie/:id', movieController.deleteOne)
Router.put('/movie/:id', movieController.update)
Router.post('/movie', movieController.post)
Router.get('/movie', movieController.get)


module.exports = Router
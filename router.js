const express = require('express')
const Router = express.Router()
const serieController = require('./controllers/seriesController')
const userController = require('./controllers/usersController')
const accountController = require('./controllers/accountController')
const movieController = require('./controllers/moviesController')
const documentalController = require('./controllers/documentalsController')
const authenticationController = require('./controllers/authenticationController')

//Authentication Routes
Router.post('/signin', authenticationController.signin)
Router.post('/login', authenticationController.login)
Router.get('/logout', authenticationController.logout)

//Serie Routes
Router.delete('/serie/:id', serieController.deleteOne)
Router.put('/serie/:id', serieController.update)
Router.post('/serie', serieController.post)
Router.get('/serie', serieController.get)

//Users Controllers 
Router.delete('/account/:account_id/user/:id', authenticationController.requiresLogin, userController.deleteOne)
Router.put('/account/:account_id/user/:id', authenticationController.requiresLogin,userController.update)
Router.post('/account/:account_id/user', authenticationController.requiresLogin,userController.post)
Router.get('/account/:account_id/user', authenticationController.requiresLogin, userController.get)

//Account Routes
Router.delete('/account/:id', authenticationController.requiresLogin, accountController.deleteOne)
Router.put('/account/:id', authenticationController.requiresLogin, accountController.update)
Router.post('/account', authenticationController.requiresLogin, accountController.post)
Router.get('/account', authenticationController.requiresLogin, accountController.get)

Router.get('/account/:id', authenticationController.requiresLogin, accountController.getOne)

//Movie Routes
Router.delete('/movie/:id', movieController.deleteOne)
Router.put('/movie/:id', movieController.update)
Router.post('/movie', movieController.post)
Router.get('/movie', movieController.get)

//Documental  Routes
Router.delete('/documental/:id', documentalController.deleteOne)
Router.put('/documental/:id', documentalController.update)
Router.post('/documental', documentalController.post)
Router.get('/documental', documentalController.get)


module.exports = Router
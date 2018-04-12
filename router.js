const express = require('express')
const Router = express.Router()
const serieController = require('./controllers/seriesController')
const userController = require('./controllers/usersController')
const accountController = require('./controllers/accountController')
const movieController = require('./controllers/moviesController')
const documentalController = require('./controllers/documentalsController')
const authenticationController = require('./controllers/authenticationController')
const authentication = require('./middlewares/authentication')

//Authentication Routes
Router.post('/login', authenticationController.login)
Router.get('/logout', authenticationController.logout)

//Account Routes
Router.post('/signin', accountController.post)
Router.get('/account', authentication.requiresLogin, accountController.get) //get all the accounts
Router.put('/account/:id', authentication.requiresLogin, accountController.update)
Router.delete('/account/:id', authentication.requiresLogin, accountController.deleteOne)
Router.get('/account/:id', authentication.requiresLogin, accountController.getOne) //get a specific account

//Users Controllers 
Router.delete('/account/:account_id/user/:id', authentication.requiresLogin, userController.deleteOne)
Router.put('/account/:account_id/user/:id', authentication.requiresLogin,userController.update)
Router.post('/account/:account_id/user', authentication.requiresLogin,userController.post)
Router.get('/account/:account_id/user', authentication.requiresLogin, userController.get)

//Serie Routes
Router.delete('/serie/:id', serieController.deleteOne)
Router.put('/serie/:id', serieController.update)
Router.post('/serie', serieController.post)
Router.get('/serie', serieController.get)

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
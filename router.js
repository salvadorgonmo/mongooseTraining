const express = require('express')
const Router = express.Router()
const serieController = require('./controllers/seriesController')
const userController = require('./controllers/usersController')
const accountController = require('./controllers/accountController')
const movieController = require('./controllers/moviesController')
const documentalController = require('./controllers/documentalsController')
const authenticationController = require('./controllers/authenticationController')

//middlewares
const authentication = require('./middlewares/authentication')
const objValidate = require('./middlewares/obj-validate')

//Authentication Routes
Router.post('/login', authenticationController.login)
Router.get('/logout', authenticationController.logout)

//Account Routes
Router.post('/signin', objValidate.objAccount, accountController.post)
Router.get('/account', authentication.requiresLogin, accountController.get) //get all the accounts
Router.put('/account/:id', authentication.requiresLogin, objValidate.objAccount, accountController.update)
Router.delete('/account/:id', authentication.requiresLogin, accountController.deleteOne)
Router.get('/account/:id', authentication.requiresLogin, accountController.getOne) //get a specific account

//Users Controllers 
Router.delete('/account/:account_id/user/:id', authentication.requiresLogin, userController.deleteOne)
Router.put('/account/:account_id/user/:id', authentication.requiresLogin, objValidate.objUser, userController.update)
Router.post('/account/:account_id/user', authentication.requiresLogin, objValidate.objUser, userController.post)
Router.get('/account/:account_id/user', authentication.requiresLogin, userController.get)

//Serie Routes
Router.delete('/serie/:id', serieController.deleteOne)
Router.put('/serie/:id', objValidate.objSerie, serieController.update)
Router.post('/serie', objValidate.objSerie, serieController.post)
Router.get('/serie', serieController.get)

//Movie Routes
Router.delete('/movie/:id', movieController.deleteOne)
Router.put('/movie/:id', objValidate.objMovie, movieController.update)
Router.post('/movie', objValidate.objMovie, movieController.post)
Router.get('/movie', movieController.get)

//Documental  Routes
Router.delete('/documental/:id', documentalController.deleteOne)
Router.put('/documental/:id', objValidate.objDocumental, documentalController.update)
Router.post('/documental', objValidate.objDocumental, documentalController.post)
Router.get('/documental', documentalController.get)


module.exports = Router
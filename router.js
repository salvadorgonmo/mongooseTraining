const express = require('express')
const Router = express.Router()
const serieController = require('./controllers/seriesController')
const userController = require('./controllers/usersController')
const accountController = require('./controllers/accountController')
const movieController = require('./controllers/moviesController')
const documentalController = require('./controllers/documentalsController')
const authMiddleware = require('./middlewares/auth-middleware')
const objMiddleware = require('./middlewares/validate-req')

// Auth middleware
const auth = authMiddleware.isAuthenticated

//Object validate middlware
const { accountValidation: objAccount } = objMiddleware
const { objUser: userValidation } = objMiddleware
const { objDocumental: docValidation} = objMiddleware
const { objMovie: movieValidation} = objMiddleware
const { objSerie: serieValidation} = objMiddleware

//Serie Routes
Router.delete('/serie/:id', auth, serieController.deleteOne)
Router.put('/serie/:id', auth, serieValidation, serieController.update)
Router.post('/serie', auth, serieValidation, serieController.post)
Router.get('/serie', auth, serieController.get)

//Users Controllers 
Router.delete('/user/:id', auth, userController.deleteOne)
Router.put('/user/:id', auth, userValidation, userController.update)
Router.post('/user/:id', auth, userValidation, userController.post)
Router.get('/user/:id', auth, userController.get)

//Account Routes
Router.delete('/account/:id', accountController.deleteOne)
Router.put('/account/:id', accountValidation, accountController.update)
Router.post('/account', accountValidation, accountController.post)
Router.get('/account', accountController.get)

//Movie Routes
Router.delete('/movie/:id', auth, movieController.deleteOne)
Router.put('/movie/:id', auth, movieValidation, movieController.update)
Router.post('/movie', auth, movieValidation, movieController.post)
Router.get('/movie', auth, movieController.get)

//Documental  Routes
Router.delete('/documental/:id', auth, documentalController.deleteOne)
Router.put('/documental/:id', auth, docValidation, documentalController.update)
Router.post('/documental', auth, docValidation, documentalController.post)
Router.get('/documental', auth, documentalController.get)

module.exports = Router
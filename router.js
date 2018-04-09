const express = require('express')
const Router = express.Router()
const serieController = require('./controllers/seriesController')
const userController = require('./controllers/usersController')
const accountController = require('./controllers/accountController')
const movieController = require('./controllers/moviesController')
const documentalController = require('./controllers/documentalsController')
const authMiddleware = require('./auth-middleware')


//Serie Routes
Router.delete('/serie/:id', authMiddleware.isAuthenticated, serieController.deleteOne)
Router.put('/serie/:id', authMiddleware.isAuthenticated, serieController.update)
Router.post('/serie', authMiddleware.isAuthenticated, serieController.post)
Router.get('/serie', authMiddleware.isAuthenticated, serieController.get)

//Users Controllers 
Router.delete('/user/:id', authMiddleware.isAuthenticated, userController.deleteOne)
Router.put('/user/:id', authMiddleware.isAuthenticated, userController.update)
Router.post('/user/:id', authMiddleware.isAuthenticated, userController.post)
Router.get('/user/:id', authMiddleware.isAuthenticated, userController.get)

//Account Routes
Router.delete('/account/:id', accountController.deleteOne)
Router.put('/account/:id', accountController.update)
Router.post('/account', accountController.post)
Router.get('/account', accountController.get)

//Movie Routes
Router.delete('/movie/:id', authMiddleware.isAuthenticated, movieController.deleteOne)
Router.put('/movie/:id', authMiddleware.isAuthenticated, movieController.update)
Router.post('/movie', authMiddleware.isAuthenticated, movieController.post)
Router.get('/movie', authMiddleware.isAuthenticated, movieController.get)

//Documental  Routes
Router.delete('/documental/:id', authMiddleware.isAuthenticated, documentalController.deleteOne)
Router.put('/documental/:id', authMiddleware.isAuthenticated, documentalController.update)
Router.post('/documental', authMiddleware.isAuthenticated, documentalController.post)
Router.get('/documental', authMiddleware.isAuthenticated, documentalController.get)

module.exports = Router
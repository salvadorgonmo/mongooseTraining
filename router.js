const express = require('express')
const Router = express.Router()
const serieController = require('./controllers/seriesController')
const userController = require('./controllers/usersController')
const accountController = require('./controllers/accountController')
const movieController = require('./controllers/moviesController')
const documentalController = require('./controllers/documentalsController')


//Serie Routes
Router.delete('/serie/:id', serieController.deleteOne)
Router.put('/serie/:id', serieController.update)
Router.post('/serie', serieController.post)
Router.get('/serie', serieController.get)

//Users Controllers 
Router.delete('/user/:id', userController.deleteOne)
Router.put('/user/:id', userController.update)
Router.post('/user', userController.post)
Router.get('/user', userController.get)

//Account Routes
Router.delete('/account/:id', accountController.deleteOne)
Router.put('/account/:id', accountController.update)
Router.post('/account', accountController.post)
Router.get('/account', accountController.get)

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
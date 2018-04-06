const express = require('express')
const Router = express.Router()
const serieController = require('./controllers/seriesController')
const userController = require('./controllers/usersController')

Router.delete('/serie/:id', serieController.deleteOne)
Router.put('/serie/:id', serieController.update)
Router.post('/serie', serieController.post)
Router.get('/serie', serieController.get)


//Users Controllers 
Router.delete('/user/:id', userController.deleteOne)
Router.put('/user/:id', userController.update)
Router.post('/user', userController.post)
Router.get('/user', userController.get)
module.exports = Router
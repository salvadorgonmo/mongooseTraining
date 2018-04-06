const express = require('express')
const Router = express.Router()
const serieController = require('./controllers/seriesController')
<<<<<<< HEAD
const userController = require('./controllers/usersController')
=======
const movieController = require('./controllers/moviesController')
>>>>>>> bedcc64f94ed046c4e1e4aa6297a177cfa9b46de

//Serie Routes
Router.delete('/serie/:id', serieController.deleteOne)
Router.put('/serie/:id', serieController.update)
Router.post('/serie', serieController.post)
Router.get('/serie', serieController.get)

<<<<<<< HEAD

//Users Controllers 
Router.delete('/user/:id', userController.deleteOne)
Router.put('/user/:id', userController.update)
Router.post('/user', userController.post)
Router.get('/user', userController.get)
=======
//Movie Routes
Router.delete('/movie/:id', movieController.deleteOne)
Router.put('/movie/:id', movieController.update)
Router.post('/movie', movieController.post)
Router.get('/movie', movieController.get)


>>>>>>> bedcc64f94ed046c4e1e4aa6297a177cfa9b46de
module.exports = Router
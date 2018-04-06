const express = require('express')
const Router = express.Router()
const serieController = require('./controllers/seriesController')
<<<<<<< HEAD
const accountController = require('./controllers/accountController')

// series
=======
const movieController = require('./controllers/moviesController')
>>>>>>> bedcc64f94ed046c4e1e4aa6297a177cfa9b46de

//Serie Routes
Router.delete('/serie/:id', serieController.deleteOne)
Router.put('/serie/:id', serieController.update)
Router.post('/serie', serieController.post)
Router.get('/serie', serieController.get)

<<<<<<< HEAD
// account

Router.delete('/account/:id', accountController.deleteOne)
Router.put('/account/:id', accountController.update)
Router.post('/account', accountController.post)
Router.get('/account', accountController.get)

=======
//Movie Routes
Router.delete('/movie/:id', movieController.deleteOne)
Router.put('/movie/:id', movieController.update)
Router.post('/movie', movieController.post)
Router.get('/movie', movieController.get)
>>>>>>> bedcc64f94ed046c4e1e4aa6297a177cfa9b46de


module.exports = Router
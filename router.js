const express = require('express')
const Router = express.Router()
const serieController = require('./controllers/seriesController')
const movieController = require('./controllers/moviesController')

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
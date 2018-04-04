const express = require('express')
const Router = express.Router()
const serieController = require('./seriesController')

Router.delete('/serie/:id', serieController.deleteOne)
Router.put('/serie/:id', serieController.update)
Router.post('/serie', serieController.post)
Router.get('/serie', serieController.get)

module.exports = Router
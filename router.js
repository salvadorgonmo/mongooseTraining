const express = require('express')
const Router = express.Router()
const serieController = require('./controllers/seriesController')
const accountController = require('./controllers/accountController')

// series

Router.delete('/serie/:id', serieController.deleteOne)
Router.put('/serie/:id', serieController.update)
Router.post('/serie', serieController.post)
Router.get('/serie', serieController.get)

// account

Router.delete('/account/:id', accountController.deleteOne)
Router.put('/account/:id', accountController.update)
Router.post('/account', accountController.post)
Router.get('/account', accountController.get)



module.exports = Router
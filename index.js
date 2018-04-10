const express = require('express')
const app = express()
const port = 4040
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
mongoose.connect('mongodb://localhost/serieNetflix')

var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
 console.log('connected successfuly')
})

app.use(bodyParser.urlencoded({ extended: false}))

//use sessions for tracking logins
app.use(session({
  secret: 'work hard',
  resave: true,
  saveUninitialized: false
}))

const router = require('./router')

app.use('/', router)

app.listen(port, function () {
  console.log('app listen on port ' + port)
})

const express = require ('express')
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser');
const app = express()

const errorMiddleware = require('./middlewares/errors')
app.use(express.json())
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));



// import all routes
const auth = require('./routes/auth')
app.use('/api/v1' , auth)

// middleware to handle errors
app.use(errorMiddleware)

module.exports = app
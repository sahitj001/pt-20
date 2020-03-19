var express = require('express')
var bodyParser = require('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const session = require('express-session')
const passport = require('./config/passport')
const userRouter = require('./routes/users')
var app = express()

//SANITY CHECK-------------------------------------
console.log(__dirname)

app.use(bodyParser.urlencoded({
  extended: true
}))
.use(express.json())
.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 500000
  }
}))
.use(passport.initialize())
.use(passport.session())
.set('view engine', 'ejs')
.use('/public', express.static('public'))
.use('/', userRouter)

//setup database-----------------------------------
mongoose.connect(process.env.MONGODB_URI, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  useNewUrlParser: 'true',
  useUnifiedTopology: 'true',
  useCreateIndex: 'true'
})


//source: Mongoose: Getting started. (z.d.). Geraadpleegd op 15 maart 2020, van https://mongoosejs.com/docs/
//connect database
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log("DATABASE CONNECTED FOR SURE")
})


//listen-----------------------------------------
app.listen(process.env.SERVER_PORT, function () {
  console.log("server starting on " + process.env.SERVER_PORT)
})


//error pages-----------------------------------
//404
app.use(function (req, res, next) {
  res.render('404.ejs')
})
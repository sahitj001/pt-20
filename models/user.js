const mongoose = require('mongoose')
const bcrypt = require("bcrypt")
var schema = mongoose.Schema

var userSchema = new schema({
  name: String,
  age: Number,
  picture: String,
  about: String,
  sports: String,
  gender: String,
  username: String,
  password: String,
  genderSpot: String,
  sportPreference: String

})

// source: jmar777. (2010, 10). Password Authentication with Mongoose (Part 1): bcrypt. Geraadpleegd op 15 maart 2020, van http://devsmash.com/blog/password-authentication-with-mongoose-and-bcrypt
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
};

var user = mongoose.model('User', userSchema)

module.exports = user
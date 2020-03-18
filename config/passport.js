const LocalStrategy = require('passport-local').Strategy
const passport = require('passport')
const mongoosedata = require('../models/user')

//passport code mainly from: http://www.passportjs.org/docs/authenticate/
//source: Passport. (z.d.). Passport documentation. Geraadpleegd op 15 maart 2020, van http://www.passportjs.org/docs/authenticate/

passport.use(new LocalStrategy(
  function (username, password, done) {
    mongoosedata.findOne({
      username: username
    }, function (err, user) {
      console.log('logging userdata in local strategy: ', user)
      console.log('client entered the following password: ', password)
      if (err) {
        return done(err)
      }

      if (!user || !user.validPassword(password)) {
        return done(null, false, console.log('credentials incorrect'))
      }

      return done(null, user, console.log('pull up'))
    })
  }
))


//serializeUser saves the user id to req.session (aka the cookie) -> req.session.passport.user
passport.serializeUser(function (user, done) {
  console.log('serializing: ' + user.id)
  done(null, user.id)
})

//deserializeUser makes it so we can attach user object as req.user
passport.deserializeUser(function (id, done) {
  console.log('deserializing: ' + id)
  mongoosedata.findById(id, function (err, user) {
    done(err, user)
  })
})

module.exports = passport
require('../config/passport')

let navigationHelper = {}

navigationHelper.goToLogin = function (req, res) {
  console.log('checking login cookie: ', req.session)
  res.render('login')
}

navigationHelper.goToRegister = function (req, res) {
  res.render('register')
}

navigationHelper.goToHome = function (req, res) {
  res.render('index')
}



module.exports = navigationHelper

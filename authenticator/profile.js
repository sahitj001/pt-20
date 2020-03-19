require('../config/passport')

let profileAuth = {}

profileAuth.profileCheck = function (req, res) {
  console.log('checking user information at /profile page: ', req.user)
  console.log('checking profile information at: ', req.session)
  if (req.user) {
    res.render('profile.ejs', {
      name: req.user.name,
      about: req.user.about,
      sports: req.user.sports,
      age: req.user.age,
      genderSpot: req.user.genderSpot,
      sportPreference: req.user.sportPreference,
      picture: req.user.picture
    })
  } else {
    res.redirect('/login')
  }
}

profileAuth.editProfileCheck = function (req, res) {
  if (req.user) {

    res.render('edit-profile.ejs', {
      name: req.user.username,
      gender: 'male'
    })
  } else {
    res.redirect('/login')
  }
}

profileAuth.logOut = function (req, res) {
  req.logOut()
  res.redirect('/')
}

profileAuth.succesRedirect = function (req, res) {
  res.redirect('profile')
}
module.exports = profileAuth

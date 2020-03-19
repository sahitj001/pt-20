const bcrypt = require('bcrypt')
const schema = require('../models/user')

let profileController = {}

const saltRounds = 10

profileController.register = function (req, res) {
  var username = req.body.username
  var password = req.body.password

  //hash password
  //source: npmjs. (z.d.). Node.bcrypt.js. Geraadpleegd op 15 maart 2020, van https://www.npmjs.com/package/bcrypt
  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {


      var item = new schema({
        username: username,
        password: hash,
        age: 20,
        picture: "./public/img/profile/profile-picture.jpg",
        about: 'You still have to put something in your about..',
        sports: 'Fill in your sport',
        gender: 'Fill in your gender',
        genderSpot: 'The gender you still have to fill in',
        sportPreference: 'something you still have to fill in',
        name: username

      })

      item.save(function (err) {
        if (err) {
          return handleError(err)

        } else {
          console.log('account info: ' + item)
          console.log('account has been added')
          res.render('login')
        }
      })
      if (err) {
        //bcrypt error log if something happens
        console.log(err)
      }

    })
    if (err) {
      //bcrypt error log
      console.log(err)
    }
  })
}

profileController.editProfile = function (req, res) {
  console.log('picture is: ', req.file)
  console.log('edit profile and looking up user id:', req.user.id)

  var filePath = req.file.path

  var userId = (req.user.id)

  schema.findOneAndUpdate({
    _id: userId
  }, {
    $set: {
      name: req.body.name,
      age: req.body.age,
      about: req.body.about,
      sports: req.body.sports,
      gender: req.body.gender,
      genderSpot: req.body.genderSpot,
      sportPreference: req.body.sportPreference,
      picture: filePath

    }
  }, {
    useFindAndModify: false
  }, function (err) {
    if (err) {
      console.log('something broke', err)
    } else {
      console.log('user id: ', userId, ' has been updated')
      res.redirect('profile')
    }
  })
}

module.exports = profileController

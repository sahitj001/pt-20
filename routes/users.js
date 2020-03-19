const express = require('express')
const router = express.Router()
const passport = require('passport')
const profileAuth = require('../authenticator/profile')
const profile = require('../helpers/profile')
const imageHelper = require('../config/multer')
const navigationHelper = require('../helpers/main')

router.get('/', navigationHelper.goToHome)

router.get('/login', navigationHelper.goToLogin)
//if authentication passes, redirect to profile with profileAuth.succesRedirect
router.post('/login', passport.authenticate('local', {
  failureRedirect: '/login'
}), profileAuth.succesRedirect)

router.get('/register', navigationHelper.goToRegister)
router.post('/register', profile.register)

router.get('/profile', profileAuth.profileCheck)

router.get('/edit-profile', profileAuth.editProfileCheck)
router.post('/edit-profile', imageHelper.upload.single('picture'), profile.editProfile)

router.get('/logout', profileAuth.logOut)

module.exports = router

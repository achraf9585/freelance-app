const express = require('express')
const router = express.Router()
const {loginUser, logout, registerUser } = require('../controllers/authController')



router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/logout').get(logout)



module.exports = router
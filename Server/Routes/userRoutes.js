const express = require('express')
const { getAllusers, registerAllusers, login ,update } = require('../controller/userController')
const router = express.Router()

///api/v1/user/all-users
router.get('/all-users',getAllusers)

router.post('/register',registerAllusers)

router.post('/login',login)

router.post('/update-user',update)

module.exports = router
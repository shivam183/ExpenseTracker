const router = require('express').Router()
const { authenticate,register }  = require('../controller/user.controller')


router.route('/login').post(authenticate)

router.route('/signup').post(register)


module.exports=router
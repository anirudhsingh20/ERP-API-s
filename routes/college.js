const express = require('express')
const authController = require('../controller/college')

const router = express.Router()

router.get('/colleges',(req,res,next)=>{
    res.json({hello:"hello"})
})
router.post('/college-signup',authController.collegeSignUp)
router.get('/get-college/:colId',authController.getCollege)
router.get('/get-colleges',authController.getColleges)
router.post('/college-login',authController.loginCollege)

module.exports = router
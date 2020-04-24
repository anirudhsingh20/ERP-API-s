const express = require('express')
const router = express.Router();
const studentController = require('../controller/student')

router.post('/student-signup',studentController.postStudent)

// router.get('/get-student/:id',)

router.get('/get-students',studentController.getStudents)

router.post('/student-login',studentController.studentLogin)


module.exports = router

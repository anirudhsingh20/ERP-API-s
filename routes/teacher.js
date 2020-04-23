const express = require('express')
const router = express.Router();
const teacherController = require('../controller/teacher')

router.post('/teacher-signup',teacherController.postTeacher)

router.get('/get-teacher/:id',)

router.get('/get-teachers',)

module.exports = router

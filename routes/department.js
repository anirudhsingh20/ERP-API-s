const express = require('express')
const router = express.Router();
const departmentController = require('../controller/department')

router.post('/add-department',departmentController.postDepartments)

router.get('/get-departments',departmentController.getDepartments)


module.exports = router
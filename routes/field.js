const express = require('express')
const router = express.Router();
const fieldsController = require('../controller/fields')

router.post('/add-field',fieldsController.postField)

router.get('/get-fields',fieldsController.getFields)


module.exports = router
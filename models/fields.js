const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fieldSchema = new Schema({
    name: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('fields',fieldSchema)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const periodsSchema = new Schema({
    collegeName: {
        type: String
    },
    sequence: {
        type: Number
    },
    from: {
        type: String
    },
    to: {
        type: String
    },
    isBreak: {
        type: Boolean
    }
})

module.exports = mongoose.model('periods', periodsSchema)
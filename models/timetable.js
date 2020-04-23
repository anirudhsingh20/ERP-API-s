const mongoose = require('mongoose')
const Schema = mongoose.Schema

const timeTableSchema = new Schema({
    className: {
        type: String,
        required: ture
    },
    DateStart: {
        type: String,
        required: true
    },
    classTeacher: {
        type: String,
        required: true
    },
    Day: [{
        name: String,
        classes: [{
            sub: String,
            period:String

        }]

    }]
})

module.exports = mongoose.model('time-table',timeTableSchema)
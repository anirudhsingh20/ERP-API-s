const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    password:{
        type:String,
        default:'student'
    },
    address:{
        street:String,
        city:String,
        state:String,
        zip:Number,
    },
    phoneNo:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    field:String,
    branch:String,
    rollNo:{
        type:Number,
        required:true
    },
    collegeName:{
        type:String,
        default:'no college'
    }

},{
    timestamps:true
})

module.exports = mongoose.model('student',studentSchema)
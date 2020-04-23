const mongoose = require('mongoose')

const Schema = mongoose.Schema

const teacherSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    password:{
        type:String,
        default:'teacher'
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
    field:{
         name:{
             type:String,
         },
         subBranches:String

    },
    subjects:{
        type:Array[String],
        required:true
    },
    collegeName:{
        type:String
    }

},{
    timestamps:true
})

module.exports = mongoose.model('teacher',teacherSchema)
const mongoose = require('mongoose')

const Schema = mongoose.Schema

const collegeSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
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
    fields:[{
         name:{
             type:String,
         },
         subBranches:[{type:String}]

    }],
    maxStudentsPerClass:{
        type:Number,
        required:true
    },

},{
    timestamps:true
})

module.exports = mongoose.model('college',collegeSchema)
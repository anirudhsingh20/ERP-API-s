const mongoose = require('mongoose')
const Schema = mongoose.Schema

const departmentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    field:{
        type:Schema.Types.ObjectId,
        ref:'fields'
    },
    semester:{
        type:Number,
        required:true
    },
    subjects:[
        {type:String}
    ]

})

module.exports = mongoose.model('departments',departmentSchema)
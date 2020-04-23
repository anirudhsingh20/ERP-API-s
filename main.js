const express = require('express')
const path = require('path')
const PORT = 8080
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

//routes
const authRoutes = require('./routes/auth')
const studentRoutes = require('./routes/student')
const fieldsRoutes = require('./routes/field')
const departmentRoutes = require('./routes/department')


const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use(bodyparser.json())
app.use(departmentRoutes)
app.use(studentRoutes)
app.use(authRoutes)
app.use(fieldsRoutes)


app.use(express.static(path.join(__dirname, 'public')))


mongoose.connect(
    'mongodb+srv://anirudh:anirudh12@cluster0-qrafd.mongodb.net/ERP?retryWrites=true&w=majority'
    )
    .then(() => {
        app.listen(PORT, () => { console.log(`\n Server is running on port : ${PORT}`) })
    })
    .catch(err=>console.log(err))
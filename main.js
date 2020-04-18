const express = require('express')
const path = require('path')
const PORT = 8085

const app = express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use('hello',(req,res,next)=>{
   return  res.status(200).json({"hello":"hello"})
})

app.use(express.static(path.join(__dirname,'public')))


app.listen(PORT, ()=>{

    console.log(`the server is running on port : ${PORT}`)
})
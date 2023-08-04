const express=require('express')
const app=express()

const cloudinary = require("cloudinary");
const notes=require('./data/notes')
const {notFound,errorHandler}=require("./middlewares/errorMiddleware")
require('./db/Conn')
require('dotenv').config()



cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
  
app.use(express.json())


app.get('/',(req,res)=>{
    res.send("APi is runnunig")
})

// app.get('/api/notes',(req,res)=>{
//     res.json(notes)
// })
//make varible for route
const userRoutes=require('./routes/userRoutes')
const noteRoutes=require('./routes/noteRoutes')


//route
app.use('/api/users',userRoutes)
app.use('/api/notes',noteRoutes)

//Error Handling Middleware
app.use(notFound)
app.use(errorHandler)

port=process.env.port || 5000
app.listen(port,()=>{
    console.log(`server is running ${port}`)
})
const express=require('express')

const app=express()
const dotenv=require('dotenv')
dotenv.config()

require('./db/Conn')
const notes=require('./data/notes')
port=process.env.port || 5000


app.get('/',(req,res)=>{
    res.send("APi is runnunig")
})

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})
app.get('/api/notes/:id',(req,res)=>{
    const note=notes.find((n)=>n._id===req.params.id)
    res.send(note)
})

app.listen(port,()=>{
    console.log(`server is running ${port}`)
})
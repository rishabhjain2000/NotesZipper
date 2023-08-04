const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://rishabhjain:08062000@cluster0.basa8hp.mongodb.net/youtubeRegistration?retryWrites=true&w=majority')
.then(()=>console.log("Database connnect Succesfull"))
.catch((err)=>console.log(err))
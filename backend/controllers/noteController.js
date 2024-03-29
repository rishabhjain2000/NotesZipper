const asyncHandler = require('express-async-handler');
const Note=require('../models/notemodel')

const getNotes=asyncHandler(async(req,res)=>{
    console.log("getnotes")
    const notes=await Note.find({user:req.user._id})
    res.json(notes);
})

const createNote=asyncHandler(async (req,res)=>{
    const {title,content,category}=req.body
    if(!title || !content || !category)
    {
        res.status(400)
        throw new Error("please fill all the field");
    }
    else{
        console.log(req.user)
        const note=new Note({user:req.user._id,title,content,category});
        const createNote=await note.save();
        res.status(201).json(createNote)
    }
})

const getNoteById=asyncHandler(async(req,res)=>{
     const note=await Note.findById(req.params.id);
     console.log(note)
    if(note)
    {

        res.json(note)   
    } 
    else{
        res.status(404).json({message:"Note not found"})
    }
    res.json(note)
})

const UpdateNote=asyncHandler(async(req,res)=>{
     const {title,content,category}=req.body
    const note=await Note.findByIdAndUpdate(req.params.id)
    if(note.user.toString()!==req.user._id.toString())
    {      
        res.status(401)
       throw new Error("You Can't perform this action") 
    } 
    if(note)
    {
        note.title=title
        note.content=content
        note.category=category
        const updateNote=await note.save()
        res.json(updateNote);
    }
    else{
        res.status(404)
        throw new Error("Note not found")
    }
  
})

const DeleteNote=asyncHandler(async(req,res)=>{
   const note=await Note.findById(req.params.id)
   if(note.user.toString()!==req.user._id.toString())
   {      
       res.status(401)
      throw new Error("You Can't perform this action") 
   } 
   if(note)
   {
    await note.deleteOne()
   res.json({message:"Note removed"})  
}
else{
    res.status(404)
    throw new Error("Note not found")
}
})
module.exports={getNotes,createNote,getNoteById,UpdateNote,DeleteNote}
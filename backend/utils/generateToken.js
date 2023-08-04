const jwt=require('jsonwebtoken')



const generateToken= (id)=>{
 
    console.log(process.env.JWT_SECRET_KEY)
 
    return jwt.sign({_id:id} ,process.env.JWT_SECRET_KEY,{
        expiresIn:"30d",
    })

}

module.exports=generateToken
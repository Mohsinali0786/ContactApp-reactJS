const mongoose=require('mongoose')

const  AddContactSchema=new mongoose.Schema({
    id:Number,
    name:String,
    email:String,
    phone:Number,
    
})
const Contacts=new mongoose.model("AddContact",AddContactSchema)
module.exports=Contacts
const {Schema , model}=require('mongoose');

const  MessageSchema =new Schema({
    
  text:String ,
  createdBy:String ,
  createdAt:String

})

module.exports= model("Messages",MessageSchema);
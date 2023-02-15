const{Schema , model }=require("mongoose");

const UserSchema = new Schema({

    userName:{ type:String , default:null },

    email:{ type:String , unique:true },

    password:{ type:String  },

    token:{ type:String  }


})


module.exports = model("User",UserSchema);
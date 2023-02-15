const User = require("../../Model/Users");
const {ApolloError}=require('apollo-server-errors');
const bcrypt=require("bcryptjs");
const jwt =require('jsonwebtoken');

module.exports = {

  Mutation: {
    async registerUser(_, { UserInput: { userName, email, password } }) {
    // check whether User exist or not in Database
      const oldUser = await User.findOne({ email });

      //Throw error if that User exists
      if(oldUser){
        throw new ApolloError('A User is already registered with this email '+email , 'USER_ALREADY_EXISTS')
      }

      //Encrypt the password 
      var encryptedPassword= await bcrypt.hash(password,10);
      
      //Build out Mongoose model (User)

      const newUser=new User({

        userName:userName,
        email:email.toLowerCase(),
        password:encryptedPassword
       
      })

      //Create Our JWT (attach to our User model )

      const token=jwt.sign(
       { user_id:newUser._id, email },
       "UNSAFE STRING SECRET_KEY",
       {
        expiresIn:"2h"
       }
      );

      newUser.token=token;

      //Save Our new User In MongoDB
    const res=await newUser.save();
     console.log(res)
    return{
        id:res.id,
        ...res._doc
    }

    },


    async loginUser(_, { loginInput: { email, password } }){

        // see if User Exist or not with this email
        const user=await User.findOne({ email })
        console.log(user)

        //check if entered Password is equal to encrypted password
         if(user && (await bcrypt.compare(password,user.password))){

           //Create New Token
        const token=jwt.sign(
            { user_id:user._id, email },
            "UNSAFE STRING SECRET_KEY",
            {
             expiresIn:"2h"
            }
           );

         //Attach Token to User Model that we found above

           user.token=token;

           return {
            id:user.id,
            ...user._doc
           }
         }else {
            //if user does'nt exist throw error ...
             throw new ApolloError("Incorrect Password",'INCORRECT_PASSWORD')
         }

       
    }
  },


  Query:{
    async user(_,{ID}){
        return User.findById(ID)
    }

  }
};

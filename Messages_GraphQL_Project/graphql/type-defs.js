const { gql }=require('apollo-server');

module.exports=gql`

#-------- Message Texts -------------#

type message{

    text:String ,
  createdBy:String ,
  createdAt:String
}

input messageInput{
text:String 
userName:String
}

input loginInput{
email:String,
password:String
}

# Quries 

type Query {
message(ID:ID!):message!
user(ID:ID!):User!
}

# Mutations 

type Mutation{
createMessage(messageInput:messageInput ):message!
registerUser(UserInput:UserInput):User
loginUser(loginInput:loginInput):User
}


#------------- User Texts--------------#

type User{

userName:String,
email:String,
password:String,
token:String

}

input UserInput{
userName:String,
email:String ,
password:String

}

input loginInput{
email:String,
password:String 
}



`
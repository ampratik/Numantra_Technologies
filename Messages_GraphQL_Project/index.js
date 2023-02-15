const {ApolloServer}=require('apollo-server');
const mongoose= require("mongoose");

const MongoDB ="mongodb+srv://amPratik:Pratik6369@cluster0.tydhs.mongodb.net/GQLDatabase?retryWrites=true&w=majority";
const port = 5599;

const typeDefs=require("./graphql/type-defs");
const resolvers=require("./graphql/Resolvers/resolvers");


const server= new ApolloServer({typeDefs , resolvers});

mongoose.set('strictQuery',false)
mongoose.connect(MongoDB,{ usenewUrlParser:true } )
.then(()=>{
    console.log("MongoDB connection successful")
    return server.listen(port)
})
.then((res)=>{
    console.log(`Server is running on Port ${res.url}`)
})

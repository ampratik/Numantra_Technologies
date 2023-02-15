const messageResolver=require("./messageResolver")
const UserResolver=require("./userResolvers")

module.exports ={

    Query:{
        ...UserResolver.Query,
        ...messageResolver.Query
    },

    Mutation:{
        ...UserResolver.Mutation,
        ...messageResolver.Mutation
    }
}
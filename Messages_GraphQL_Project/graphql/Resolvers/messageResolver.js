const Message=require('../../Model/Message');

module.exports= {

    Query:{

    async message(_,{ID}){
    return await Message.findById(ID)
    }    
 },


Mutation:{

async createMessage(_,{messageInput:{text,userName}}){

    const newMessage=new Message({
        text:text,
        createdBy:userName,
        createdAt:new Date().toISOString()

    });

    const res =await newMessage.save();
    console.log(res);
    return {
        id:res.id,
        ...res._doc
    }
}

}


}
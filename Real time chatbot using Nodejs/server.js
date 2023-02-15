const express = require("express");
 const app=express();
 const port=process.env.PORT || 3000

 const http=require('http').createServer(app);


 http.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
 })
 
app.use(express.static(__dirname + '/public'))

 app.get('/',(req,res)=>{
    // console.log("Hey Server is Working well")
    res.sendFile(__dirname + '/index.html')
 })


 // socket.io
const io=require("socket.io")(http);

io.on('connection',(socket)=>{
    console.log("connected...")

    socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)
        console.log(msg)
    })
})

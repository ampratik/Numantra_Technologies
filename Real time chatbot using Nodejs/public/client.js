const socket=io();
let userName;
let textarea=document.querySelector('#textarea');
let messageArea=document.querySelector('.message_Area');



do{
userName=prompt('Please enter your name ..');
}while(!userName);

textarea.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        sendMessage(e.target.value)
    }
})

// function for sending message 

function sendMessage(msgg){
    let msg={
    user:userName,
    message:msgg.trim()
   }
   //append message 
   appendMessage(msg,'outgoing') 
   textarea.value='';
   scrollToBottom();
   
   //send to the server
  socket.emit('message',msg)
}

// function for appending Message 

function appendMessage(msg,type){
    let maindiv=document.createElement('div');
    let className=type 
    
    maindiv.classList.add(className,'message');
    
    let markup=`
    <h4>${msg.user}</h4>
    <p>${msg.message}</p>
    
    `
    
    maindiv.innerHTML=markup;
    console.log(maindiv);
    messageArea.appendChild(maindiv);
    
    }
    //receive Message
    socket.on('message',(msg)=>{
        appendMessage(msg,'incoming')
        scrollToBottom()
    })

    function scrollToBottom(){
        messageArea.scrollTop=messageArea.scrollHeight ;
    }




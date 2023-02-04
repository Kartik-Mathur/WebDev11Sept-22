const express = require('express');
const app = express();
const path = require('path');
const socket = require('socket.io');
const PORT = 4444;
const server = require('http').createServer(app);
const io = socket(server);
let userMap = {};

io.on("connection",(socket)=>{
    
    console.log(socket.id);

    socket.on('message',(data)=>{
        console.log(data.message);
        io.emit('showmessage',{
            message: data.message,
            userId: userMap[socket.id]
        })
    })

    socket.on('login',(data)=>{
        userMap[socket.id] = data.username;
        socket.emit('loggedIn');
    })


})

app.use('/',express.static(path.join(__dirname, 'static')));
app.use(express.urlencoded({ extended: true }));


server.listen(PORT, () => {
    console.log('http://localhost:'+PORT);
})
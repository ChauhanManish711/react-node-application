const express = require("express");
const http = require('http');
require('dotenv').config();
const PORT = process.env.PORT;
var cors = require('cors');
const app = express();
app.use(cors());
const { Server } = require('socket.io');
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:'*',
    },
});
app.use(function(req,res,next){
    req.io=io;
    next();
})
io.on('connection',(socket)=>{
    // console.log(socket.connected)
    socket.on('message',(msg)=>{
        console.log('message: '+msg);
    });
    socket.emit('server_message','hello client ,I am server');
})

app.get('/test-message', (req,res)=>{
    // req.io('connection',(socket)=>{
    //     io.emit('message','Hello world');
    // });
    res.send({'test':'test'})
})

const admin = require('./routes/web.js');
app.use('/server',admin);
server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

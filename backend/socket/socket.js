import { Server } from "socket.io";
import http from 'http';
import express from "express";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: ["https://chat-app-with-mern-weld.vercel.app"],
        methods: ["GET","POST"]
    }
});

export const getRecieverSocketId = (recieverId) => {
    return userSocketMap[recieverId];
}

const userSocketMap = {} // {userId: socketId}

// io connection
io.on('connection', (socket) => {
    console.log('A user connected ', socket.id);

    const userId = socket.handshake.query.userId;

    if (userId != "undefined") userSocketMap[userId] = socket.id;

    // io.emit() used to send event to all connected clients
    io.emit('getOnlineUsers', Object.keys(userSocketMap));

    // console.log(userSocketMap);

    // socket.on() is used to listen to the events. Can be used both on client and server side
    socket.on('disconnect', () => {
        console.log('A user disconnected');
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    })
    
})


export {app, io, server }
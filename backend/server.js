// Importing dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// App configuration
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


// Database configuration
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

// API routes

const eventRouter = require('./routes/events');
const userRouter = require('./routes/users');
const roomRouter = require('./routes/rooms');
const chatRouter = require('./routes/chats');

app.use('/users', userRouter);
app.use('/events', eventRouter);
app.use('/rooms', roomRouter);
app.use('/chats', chatRouter);

require('./models/chat.model');
const Message = mongoose.model("Chat");

// I wanted to get socket.io working, but I do not have time and it works as is.
app.get('/', (req, res) => {
    });

    // listening
    const expressServer = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)


})

const io = require('socket.io')(expressServer);

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('chat message', (msg) => {
        io.emit('chat messge', msg);

        const newChat = new Message({
            senderName:msg.senderName,
            message:msg.message,
            roomName:msg.roomName,
            date: date.now()
        });
        newChat.save();
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
});
});


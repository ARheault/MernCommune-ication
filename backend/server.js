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

// Middlewaare


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


// listening
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    console.log(`I hope that worked!`);
});
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chat = new Schema({
    senderName: {
        type: String, required: true
    },
    message: {
        type: String, required: true
    },
    date: {
        type: Date, required: true
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("chat", chat);
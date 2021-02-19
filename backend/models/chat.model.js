const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chat = new Schema({
    senderName: {
        type: String, required: true
    },
    message: {
        type: String, required: true
    },
    roomName: {
        type: String, required: true
    },
    date: {
        type: Date, required: true
    },
}, {
    timestamps: true,
});

chat.statics.findchats = function (roomName, cb) {
    return this.find(cb)
        .where('roomName', roomName);
};

module.exports = mongoose.model("chat", chat);
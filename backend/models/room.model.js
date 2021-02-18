const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const room = new Schema({
    roomName: {
        type: String, required: true
    },
    dateCreated: {
        type: Date, required: true, default: Date.now
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("room", room)
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const room = new Schema({
    roomName: {
        type: String, required: true
    },
    dateCreated: {
        type: Date, required: true, default: Date.now
    },
    users: [String]
}, {
    timestamps: true,
});

room.statics.findchats = function (username, cb) {
    return this.find(cb)
        .where('users', username)
}

module.exports = mongoose.model("room", room)
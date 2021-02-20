const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Room = new Schema({
    roomName: {
        type: String, required: true
    },
    dateCreated: {
        type: Date, required: true, default: Date.now
    },
}, {
    timestamps: true,
});

Room.statics.findAllRooms = function(cb){
    return this.find(cb);
};

module.exports = mongoose.model("Room", Room);
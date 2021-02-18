const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    username: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    dateJoined: {
        type: Date, required: true, default: Date.now
    },
}, {
    timestamps: true,
});

user.static.findrooms = function(cb) {
    return this.find()
}

module.exports = mongoose.model("chat", user)
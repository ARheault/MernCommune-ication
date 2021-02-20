const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * This is the user Schema
 * @username This is the User's username
 * @password This is the User's password
 * @dateJoined This is the date and time that the user joined the app
 * @rooms This is a string array that holds the names of every room the user has access to
 */
const User = new Schema({
    username: {
        type: String, required: true
    },
    password: {
        type: String, required: true
    },
    dateJoined: {
        type: Date, required: true, default: Date.now
    },
    rooms: [{
        type: String
    }],
}, {
    timestamps: true,
});

User.static.findrooms = function (cb) {
    return this.find();
};

User.statics.getrooms = function(username, cb) {
    return this.find(cb).rooms
    .where('username', username);
};

module.exports = mongoose.model("User", User);
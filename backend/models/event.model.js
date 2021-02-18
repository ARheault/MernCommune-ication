const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const event = new Schema({
    eventName: {
        type: String, required: true
    },
    date: {
        type: Date, required: true
    },
    User: String
}, {
    timestamps: true,
});

event.statics.logEvent = function (val, cb) {
    const theEvent = new this(val);
    theEvent.save(cb)
}

module.exports = mongoose.model("event", chat)
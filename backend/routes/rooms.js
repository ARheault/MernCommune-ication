const router = require('express').Router();
const Room = require('../models/room.model');
const chat = require('../models/chat.model');

router.route('/').get((req, res) => {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(r00).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const roomName = req.body.roomName;
    const date = Date.parse(req.body.date);
    const newRoom = new Room({
        roomName,
        date,
    });

    newRoom.save()
        .then(() => res.json('Room added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getchat').get(async (req, res) => {
    var aRoom =  chat.findchats(req.body.roomName);//Room.find({ roomName: req.body.roomName })
    if (aRoom[0]) {
        res.send(chat.findchats(aRoom[0].roomName));
    }
    else{
        console.log("wasn't found!");
        res.send("Wasn't found!");
    }
});
module.exports = router;
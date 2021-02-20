const router = require('express').Router();
let Room = require('../models/room.model');

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

module.exports = router;
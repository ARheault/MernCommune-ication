const router = require('express').Router();
let Room = require('../models/room.model');

router.route('/').get((req, res) => {
    Room.find()
    .then(rooms => res.json(rooms))
    .catch(err => res.status(r00).json('Error ' + err));
});

module.exports = router;
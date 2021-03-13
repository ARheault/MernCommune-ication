const router = require('express').Router();
const Room = require('../models/room.model');
const chat = require('../models/chat.model');
const { findOneAndDelete } = require('../models/room.model');

router.route('/').get((req, res) => {
    Room.find()
        .then(rooms => res.json(rooms))
        .catch(err => res.status(r00).json('Error ' + err));
});

router.route('/add').post((req, res) => {
    const roomName = req.body.roomName;
    const date = Date.parse(req.body.date);
    console.log(date);
    const newRoom = new Room({
        roomName,
        date,
    });

    newRoom.save()
        .then(() => res.json('Room added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/getchat').get(async (req, res) => {
    const roomName = req.body.roomName;
    chat.findchats(roomName, (err, result) => {
        if (err) {
            return err;
        }
        return result;
    })
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).json('Error' + err));
});

router.route('/delete').post((req,res) => {
    console.log(req.body.roomToDelete);
    const query = {"roomName": req.body.roomToDelete};
    Room.deleteOne(query)
    .then(result => console.log('Deleted ' + req.body.roomToDelete))
    .catch(err => console.error('Delete failed'));
    /*
        Here I want to find the room and delete it, then use the chat model to delete all chats with the room name as well
    */
/*    Room.findByIdAndDelete(req.body.roomToDelete)
        .then((result) => res.json(result))
        .catch(err => res.status(400).json('Error: ' + err));

    chat.findbyIdandDelete(req.body.roomToDelete)
   */ 
});

module.exports = router;
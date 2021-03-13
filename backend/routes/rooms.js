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
    // Structure our query
    const query = {"roomName": req.body.roomName};
   
    Room.deleteOne(query, function(err, result) {
        if(err){
            res.send(err);
        }
    });

    // After deleting the room, we now want to make sure that we delete all of the messages to not waste space in the database.
    chat.deleteMany({roomName: req.body.roomName}, function(err, result) {
        if(err){
            res.send(err);
        }
        else{
            res.send(result);
        }
    });
});
module.exports = router;
const router = require('express').Router();
let Chat = require(`../models/chat.model`);

router.route('/').get((req, res) => {
    Chat.find()
        .then(chats => res.json(chats))
        .catch(err => res.status(r00).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Chat.findchats(req.params.id, (err, result) => {
        if (err) {
            return err;
        }
        console.log(result);
        return result;
    })
        .then((result) => res.status(200).json(result))
        .catch((err) => res.status(400).json('Error' + err));
});

router.route('/add').post((req, res) => {
    const senderName = req.body.senderName;
    const message = req.body.message;
    const roomName = req.body.roomName;
    const date = Date.now();

    console.log(date);
    const newChat = new Chat({
        senderName,
        message,
        roomName,
        date,
    });

    newChat.save()
        .then(() => res.json('Chat added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
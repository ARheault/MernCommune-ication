const router = require('express').Router();
let Chat = require(`../models/chat.model`);

router.route('/').get((req, res) => {
    Chat.find()
        .then(chats => res.json(chats))
        .catch(err => res.status(r00).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const senderName = req.body.senderName;
    const message = req.body.message;
    const roomName = req.body.roomName;
    const date = Date.parse(req.body.date);
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

router.route('/:id').get((req, res) => {
    Chat.findById(req.params.id)
    .then(chat => res.json(chat))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id').get((req, res) => {
    Chat.findByIdAndDelete(req.params.id)
    .then(() => res.json('Chat deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req,res) => {
    Chat.findById(req.params.id)
    .then(chat => {
        chat.senderID = req.body.senderID;
        chat.senderName = req.body.senderName;
        chat.recieverID = req.body.recieverID;
        chat.recieverName = req.body.recieverName;
        chat.message = req.body.message;
        chat.date = Date.parse(req.body.date);

        chat.save()
        .then(() => res.json('Chat updated'))
        .catch(err => res.status(400).json('Error ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
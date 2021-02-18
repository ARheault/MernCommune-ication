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
    const date = Date.parse(req.body.date);

    const newChat = new Chat({
        senderName,
        message,
        date,
    });

    newChat.save()
        .then(() => res.json('Chat added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:name').get((req, res) => {
    Chat.findByname(req.params.senderName)
        .then(chat => res.json(chat))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:name').get((req, res) => {
    Chat.findByIdAndDelete(req.params.senderName)
        .then(() => res.json('Chat deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
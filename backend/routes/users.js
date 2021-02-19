const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const date = Date.parse(req.body.date);

  const newUser = new User({
      username,
      password,
      date,
    });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/allrooms').get((req, res) => {
  User.find({username: req.body.username})
  .then(users => res.json(users.rooms))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
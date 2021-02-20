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
  const rooms = req.body.rooms;

  const newUser = new User({
    username,
    password,
    rooms,
    date,
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/allrooms').get(async (req, res) => {
  const username = req.body.username;
  var aUser = await User.find({ username: username });
  console.log(username);
  if (aUser) {
    console.log(aUser);
    /* if (aUser.rooms) {
      return res.aUser.rooms;

    else {
      return [];
    } */
  }
  else {
    return [];
  }
  res.send("hello world");
});

module.exports = router;
// Importing models and dependencies
const router = require('express').Router();
let User = require('../models/user.model');

// Return all users that are found in the database
router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users)) // If we find users
    .catch(err => res.status(400).json('Error: ' + err)); // If we encounter an error
});

/**
 * Login system 
 * This login system works by finding the user in the database
 * @param req.body.username This is the username that is input by the client in the body of the json.
 * @param req.body.password This is the password that is input by the client in the body of the json.
 * @return It returns the user that has logged in. This allows the Client to have an up to date version of itself.
 */
router.route('/login').post(async (req, res) => {
  console.log(req.body)
  var theUser = await User.find({ username: req.body.username });
  if (theUser.length > 0) {
    if (theUser[0].password === req.body.password) {
      res.send("success");
      return theUser[0];
      /**
       * Hopefully I can develop some sort of cookie system for this.
       */
    }
    console.log(theUser[0].password);
    console.log("Someone tried to login to:" + req.body.username + " with bad password:" + req.body.password);
    res.send("Wrong password, please try again");
  }
  else {
    res.send("There is no user by that name, please try to re-enter the correct username.")
  }
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
  if (aUser.length > 0) {
    console.log(aUser);
    res.send(aUser[0].rooms);
  }
});

router.route('/joinroom').post(async (req, res) => {
  User.find({ username: req.body.username })
    .then(user => {
      user[0].rooms.push(req.body.room);
      user[0].save()
        .then(() => res.json(user));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
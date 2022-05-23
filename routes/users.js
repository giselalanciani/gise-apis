const express = require('express');

const router = express.Router();

const locationUsers = {
  users: []
};

router.post('/user', (req, res, next) => {
  locationUsers.users.push({
    id: Math.random(),
    name: req.body.name,
    email: req.body.email
  });
  res.json({message: 'Stored User!'});
});

router.get('/user', (req, res, next) => {
  res.json(locationUsers.users)
});

module.exports = router;

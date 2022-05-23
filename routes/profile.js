const express = require('express');

const router = express.Router();

const locationProfile = {
  profile: []
};

router.post('/profile', (req, res, next) => {
  locationProfile.profile.push({
    id: Math.random(),
    age: req.body.age,
    nationality: req.body.nationality
  });
  res.json({message: 'Stored User!'});
});

router.get('/profile', (req, res, next) => {
  res.json(locationProfile.profile)
});

module.exports = router;

const { application } = require('express');
const express = require('express');
const habits = require('./controllers/habits');
const user = require('./controllers/user');

const router = express.Router();

router.post('/register', user.postUsers)


module.exports = router;
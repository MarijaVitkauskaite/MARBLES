const { application } = require('express');
const express = require('express');
const habits = require('./controllers/habits');
const user = require('./controllers/user');

const router = express.Router();

router.post('/register', user.registerUser)
router.post('/login', user.loginUser)

router.post('/habits', habits.saveHabits)
router.get('/habits', habits.showHabits)
router.delete('/habits/:id', habits.deleteHabits);

module.exports = router;
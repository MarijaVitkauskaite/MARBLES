const express = require('express');
const habits = require('./controllers/habits');
const user = require('./controllers/user');

const router = express.Router();

router.post('/register', user.registerUser)
router.post('/login', user.loginUser)

router.post('/habits', habits.saveHabits)
router.put('/habits', habits.showHabits)
router.put('/habits/:id', habits.deleteHabits);

module.exports = router;
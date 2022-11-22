const express = require('express');
const habits = require('./controllers/habits');
const user = require('./controllers/user');

const router = express.Router();
// TODO add get /delte  methods  instead of put?
router.post('/register', user.registerUser);
router.get('/login', user.loginUser);

router.post('/habits', habits.saveHabits);
router.delete('/habits/delete/:id', habits.deleteHabits);
router.put('/habits/complete/:id', habits.completeHabits);

module.exports = router;

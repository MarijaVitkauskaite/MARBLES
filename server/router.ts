const express = require('express');
const { saveHabits, deleteHabits, completeHabits } = require('./controllers/habits');
const { registerUser, loginUser } = require('./controllers/user');
const router = express.Router();

router.post('/register', registerUser);
router.put('/login', loginUser);

router.post('/habits', saveHabits);
router.delete('/habits/delete/:id', deleteHabits);
router.put('/habits/complete/:id', completeHabits);

module.exports = router;

const box = require ('../models/index');

const saveHabits = async(req, res) => {
  const {habit} = req.body;
  try {
    const variable = await box.habit.create({habit: habit});
    res.status(201);
    res.json({habit: habit});
  } catch (error) {
    res.status(500);
    console.log('error in saveHabits: ', error);
  }
}

const showHabits = async(req, res) => {

}   

const deleteHabits = async(req, res) => {

}

module.exports = { saveHabits, showHabits, deleteHabits}
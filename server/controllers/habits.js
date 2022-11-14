const box = require ('../models/index');

const USER_ID = 1;

const saveHabits = async(req, res) => {
  const {habit} = req.body;
  const habitWithUser = { habit, UserId: USER_ID };
  console.log(habitWithUser);
  try {
    const countHabits = await box.habit.findAll({where: {UserId: USER_ID}});
    if (countHabits.length < 5) {
      const createHabit = await box.habit.create(habitWithUser);
    res.status(201);
    res.json(createHabit);
    } else {
      res.json('Too many habits');
    }
  } catch (error) {
    res.status(500);
    console.log('error in saveHabits: ', error);
  }
}

const showHabits = async(req, res) => {
  try {
    const findHabits = await box.habit.findAll({where: {UserId: USER_ID}});
    res.send(findHabits);  
  } catch (error) {
    res.status(500);
    console.log('error in showHabits: ', error);
  }
}   

const deleteHabits = async(req, res) => {
  try {
    const {id} = req.params;
    await box.habit.update({where: {id: id}});
    res.body('Removed');
  } catch (error) {
    res.status(500);
    console.log('error in deleteHabits: ', error);
  }
}

const updateHabits = async(req, res) => {
  try {
    const {id} = req.params;
    await box.habit.update({where: {id: id, date: new Date()}}); //convert to yyyy-MM-dd
    // how to check that it only updates that date not the whole entire habit???
    res.body('Updated');
  } catch (error) {
    res.status(500);
    console.log('error in updateHabits: ', error);
  }
}

module.exports = { saveHabits, showHabits, deleteHabits, updateHabits }
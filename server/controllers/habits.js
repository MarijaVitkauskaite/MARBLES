const { Op } = require("sequelize");
const box = require ('../models/index');

const USER_ID = 1;

const saveHabits = async(req, res) => {
  const {habit} = req.body;
  const habitWithUser = { habit, UserId: USER_ID, completed: [] };
  try {
    const countHabits = await box.habit.findAll({where: {UserId: USER_ID, deletedAt: null}});
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
    const findHabits = await box.habit.findAll({where: {UserId: USER_ID, 
      createdAt: {[Op.lt]: new Date(req.body.selectedDate)}}});
      (new Date(req.body.selectedDate));
    const filteredHabits = findHabits.filter((habit) => {
      if (!habit.deletedAt) return true; 
      return habit.deletedAt.valueOf() > new Date(req.body.selectedDate).valueOf()
    })
    res.send(filteredHabits); 
  } catch (error) {
    res.status(500);
    console.log('error in showHabits: ', error);
  }
}   

const deleteHabits = async(req, res) => {
  try {
    const {id} = req.params;
    await box.habit.update({deletedAt: req.body.selectedDate}, {where: {id: id}});
    res.send('Removed');
  } catch (error) {
    res.status(500);
    console.log('error in deleteHabits: ', error);
  }
}

const completeHabits = async(req, res) => {
  try {
    const {id} = req.params;
    const habit = await box.habit.findOne({where: {id: id}}); 
    habit.completed = [...habit.completed, req.body.selectedDate];
    await habit.save();
    res.send('Completed');
  } catch (error) {
    res.status(500);
    console.log('error in completeHabits: ', error);
  }
}

module.exports = { saveHabits, showHabits, deleteHabits, completeHabits }
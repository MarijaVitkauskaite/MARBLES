const box = require ('../models/index');

const USER_ID = 1;

const saveHabits = async(req, res) => {
  const {habit} = req.body;
  const habitWithUser = { habit, UserId: USER_ID };
  console.log(habitWithUser);
  try {
    const createHabit = await box.habit.create(habitWithUser);
    res.status(201);
    res.json(createHabit);
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
    await box.habit.destroy({where: {id: id}});
    res.body('Removed');
} catch (error) {
    res.status(500);
    console.log('error in deleteHabits: ', error);
}
}

module.exports = { saveHabits, showHabits, deleteHabits }
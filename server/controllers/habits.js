const box = require ('../models/index');

const saveHabits = async(req, res) => {
  const {habit} = req.body;
  const habitWithUser = {
    ...habit,
    id: 1
  }
  try {
    const variable = await box.habit.create({habit: habitWithUser});
    res.status(201);
    res.json({habit: habit});
  } catch (error) {
    res.status(500);
    console.log('error in saveHabits: ', error);
  }
}

const showHabits = async(req, res) => {
  try {
    const variable = await box.habit.findOne({where: {id: habitWithUser.id}});
    res.send(variable);  
  } catch (error) {
    res.status(500);
    console.log('error in showHabits: ', error);
  }
}   

const deleteHabits = async(req, res) => {
  try {
    const {id} = req.params;
    const variable = await box.habit.destroy({where: {id: habitWithUser.id}});
    res.body('Removed');
} catch (error) {
    res.status(500);
    console.log('error in deleteHabits: ', error);
}
}

module.exports = { saveHabits, showHabits, deleteHabits }
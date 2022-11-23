import { getHabits, createHabit, delHabits, completeHabit, getid } from '../models/habitFunctions'
const { getuser } = require('../models/userFunctions');

// TODO refactor in controller and model different files && refactor to real db search
//  TODO CHECK RETURN STATUSES

const saveHabits = async (req: any, res: any) => {
  const habitWithUser = { habit: req.body.habit, userId: req.body.userId, completed: [] };
  try {
    const createdHabit = await createHabit(habitWithUser);
    res.status(201);
    const habits = await getHabits(req.body.userId)
    const user = await getuser(req.body.userId)
    const data = { ...user.dataValues, habits }
    res.send(data);
  } catch (error) {
    res.status(500);
  }
}; //return user with array of habits

const deleteHabits = async (req: any, res: any) => {
  try {

    const { id } = req.params;
    const item = await getid(id)
    await delHabits(id);
    const habits = await getHabits(item.dataValues.userId)
    const user = await getuser(item.dataValues.userId)
    const data = { ...user.dataValues, habits }

    res.status(201);
    res.send(data);
  } catch (error) {
    res.status(500);
    console.log('error in deleteHabits: ', error);
  }
};//return user with array of habits

const completeHabits = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await completeHabit(id, req.body.selectedDate)
    const item = await getid(id)
    const habits = await getHabits(item.userId)
    const user = await getuser(item.userId)
    const data = { ...user.dataValues, habits }

    res.status(201);
    res.send(data);
  } catch (error) {
    res.status(500);
    console.log('error in completeHabits: ', error);
  }
};//return user with array of habits

module.exports = { saveHabits, deleteHabits, completeHabits };

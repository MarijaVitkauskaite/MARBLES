import { getHabits, createHabit, delHabits, completeHabit, getid } from '../models/habitFunctions'
const {getuser} = require('../models/userFunctions');

// TODO refactor in controller and model different files && refactor to real db search
//  TODO CHECK RETURN STATUSES

const saveHabits = async (req: any, res: any) => {
  const habitWithUser = { habit: req.body.habit,  userId: req.body.user_id, completed: [] };
  try {
    const createdHabit = await createHabit(habitWithUser);
    res.status(201);
    const habitt = await getHabits(req.body.user_id)
    const user = await getuser(req.body.user_id)
    const data = { ...user , habitt}
    res.send(data);
  } catch (error) {
    res.status(500);
    console.log('error in saveHabits: ', error);
  }
}; //return user with array of habits

const deleteHabits = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await delHabits(id);
    const item = await getid(id)
    const habitt = await getHabits(item.userId)
    const user = await getuser(item.userId)
    const data = { ...user , habitt}
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
    const habitt = await getHabits(item.userId)
    const user = await getuser(item.userId)
    const data = { ...user , habitt}
    res.status(201);
    res.send(data);
  } catch (error) {
    res.status(500);
    console.log('error in completeHabits: ', error);
  }
};//return user with array of habits

module.exports = { saveHabits, deleteHabits, completeHabits };

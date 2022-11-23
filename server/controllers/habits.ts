import { getHabits, createHabit, deleteHabit, completeHabit, getHabitById } from '../models/habit';
import { getUser } from '../models/user';
import express = require('express');

const saveHabits = async (req: express.Request, res: express.Response) => {
  const habitWithUser = { habit: req.body.habit, userId: req.body.userId, completed: [] };
  try {
    const createdHabit = await createHabit(habitWithUser);
    const [habits, user] = await Promise.all([
      getHabits(req.body.userId),
      getUser(req.body.userId),
    ]);

    const data = { ...user.dataValues, habits };
    res.status(201);
    res.send(data);
  } catch (error) {
    res.status(500);
  }
};

const deleteHabits = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const item = await getHabitById(id);
    await deleteHabit(id);
    const [habits, user] = await Promise.all([getHabits(item.userId), getUser(item.userId)]);

    const data = { ...user.dataValues, habits };

    res.status(201);
    res.send(data);
  } catch (error) {
    res.status(500);
    console.log('error in deleteHabits: ', error);
  }
};

const completeHabits = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    await completeHabit(id, req.body.selectedDate);
    const item = await getHabitById(id);
    const [habits, user] = await Promise.all([getHabits(item.userId), getUser(item.userId)]);
    const data = { ...user.dataValues, habits };

    res.status(201);
    res.send(data);
  } catch (error) {
    res.status(500);
    console.log('error in completeHabits: ', error);
  }
};

module.exports = { saveHabits, deleteHabits, completeHabits };

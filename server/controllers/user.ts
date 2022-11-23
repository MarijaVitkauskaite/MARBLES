import { createUser, doesEmailExist, getUser } from '../models/user';
import { getHabits } from '../models/habit';
import express = require('express');

const registerUser = async (req: express.Request, res: express.Response) => {
  const { email, userId } = req.body;
  try {
    const emailExists = await doesEmailExist(email);
    if (emailExists) throw Error('User already exists');

    const user = await createUser(email, userId);
    res.status(201);
    res.send(user);
  } catch (error) {
    res.status(500);
    console.log('error in postUsers: ', error);
  }
};

const loginUser = async (req: express.Request, res: express.Response) => {
  const { email, userId } = req.body;
  try {
    const emailExists = await doesEmailExist(email);
    if (!emailExists) throw Error('User already exists');

    const [habits, user] = await Promise.all([getHabits(userId), getUser(userId)]);
    const data = { ...user.dataValues, habits };
    res.status(201);
    res.send(data);
  } catch (error) {
    res.status(500);
    console.log('error in loginUsers: ', error);
  }
};
export { registerUser, loginUser };

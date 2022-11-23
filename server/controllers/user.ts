const { createUser, doesEmailExist, getuser } = require('../models/userFunctions');
import { getHabits } from '../models/habitFunctions'

const registerUser = async (req: any, res: any) => {
  const { email, userId } = req.body;
  try {
    const emailExists = await doesEmailExist(email);
    if (emailExists) {
      res.status(200)
      res.send('send back user');
    } else {
      const user = await createUser(email, userId);
      res.status(201);
      res.send(user);
    }
  } catch (error) {
    res.status(500);
    console.log('error in postUsers: ', error);
  }
};

const loginUser = async (req: any, res: any) => {
  // console.log(req.body)
  const { email, userId } = req.body;
  try {
    const emailExists = await doesEmailExist(email);
    // console.log(emailExists)
    if (emailExists) {
      const habits = await getHabits(userId)
      const user = await getuser(userId)
      const data = { ...user.dataValues, habits }
      console.log(data, "data")
      res.status(201);
      res.send(data);
    }
  } catch (error) {
    res.status(500);
    console.log('error in loginUsers: ', error);
  }
};
module.exports = { registerUser, loginUser };

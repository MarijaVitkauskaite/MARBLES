const {createUser, doesEmailExist, getuser} = require('../models/userFunctions');
import { getHabits } from '../models/habitFunctions'

const registerUser = async (req: any, res: any) => {
  const { email, id } = req.body;
  try {
    const emailExists = await doesEmailExist(email);
    if (emailExists) {
      res.status(200)
        res.send('send back user');
    } else {
      const user = await createUser(email, id);
      res.status(201);
      res.send(user);
    }
  } catch (error) {
    res.status(500);
    console.log('error in postUsers: ', error);
  }
};

const loginUser = async (req: any, res: any) => {
  const { email, id } = req.body;
  try {
    const emailExists = await doesEmailExist(email);
    const isidright = emailExists.userId === id;
    if (emailExists && isidright) {
      const habits = await getHabits(id)
      const user = await getuser(id)
      const data = { ...user , habits}
      res.status(201);
      res.send(data);
    } else {
      res.status(200);
      res.send('Please register');
    }
  } catch (error) {
    res.status(500);
    console.log('error in loginUsers: ', error);
  }
};
module.exports = { registerUser, loginUser };

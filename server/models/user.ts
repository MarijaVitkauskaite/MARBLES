import { User } from '../../lib/api-intefaces';
import { DB } from '../schemas/databaseConnection';

async function getUser(userId: string) {
  return await DB.user.findOne({ where: { userId } });
}

async function doesEmailExist(email: string) {
  const data = await DB.user.findOne({ where: { email: email } });
  return data;
}

async function createUser(email: string, userId: string): Promise<User> {
  const data = await DB.user.create({ email: email, userId });
  return data;
}

export { createUser, doesEmailExist, getUser };

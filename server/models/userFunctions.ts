import { User } from "../../lib/api-intefaces";
import { box } from '../schemas/index'

async function getuser(id: string) {
  return await box.user.findOne({ where: { id: id } })
}

async function doesEmailExist(email: string) {
  const data = await box.user.findOne({ where: { email: email } });
  return data
}

async function createUser(email: string, id: string): Promise<User>{
  const data = await box.user.create({ email: email,  userId: id })
  return data
}

module.exports = {createUser, doesEmailExist, getuser}
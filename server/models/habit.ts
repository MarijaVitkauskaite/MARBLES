import { DB } from '../schemas/databaseConnection';

async function getHabitById(id: string) {
  return await DB.habit.findOne({ where: { id } });
}

async function getHabits(userId: string) {
  return await DB.habit.findAll({ where: { userId } });
}

async function createHabit(habit: any) {
  return await DB.habit.create(habit);
}

async function deleteHabit(id: string) {
  return await DB.habit.destroy({ where: { id } });
}

async function completeHabit(id: string, date: string) {
  let habit = await DB.habit.findOne({ where: { id } });
  habit.completed = [...habit.completed, date];
  return await habit.save();
}
export { getHabits, createHabit, deleteHabit, completeHabit, getHabitById };

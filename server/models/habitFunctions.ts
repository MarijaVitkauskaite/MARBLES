import { Op } from 'sequelize'
import { box } from '../schemas/index'

async function getHabits(id: number) {
  return await box.habit.findAll({ where: { id: id, deletedAt: null } })
}

async function createHabit(habit: any){
return await box.habit.create(habit)
}

async function getHabitsByDate(id: number, date: string) {
  return await box.habit.findAll({where: { id: id, createdAt: { [Op.lt]: new Date(date) } },});
}

async function filterHabits(habits: any, date: any) {
  const data = await habits.filter((habit: any) => {
      if (!habit.deletedAt) return true;
    return habit.deletedAt.valueOf() > new Date(date).valueOf();
  });
  return data
}

async function delHabits(date: string, id: string){
  return await box.habit.update({ deletedAt: date}, { where: { id: id } });
}

async function completeHabit(id: string, date: string){
  let habit: any = await box.habit.findOne({ where: { id: id } });
  habit.completed = [...habit.completed, date];
  return await habit.save();
}
export { getHabits, createHabit, getHabitsByDate, filterHabits, delHabits, completeHabit}
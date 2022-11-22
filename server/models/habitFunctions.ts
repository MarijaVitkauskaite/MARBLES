import { box } from '../schemas/index'

async function getid(id: string) {
  return await box.habit.findAll({ where: { id: id } })
}

async function getHabits(id: number) {
  return await box.habit.findAll({ where: { userId: id } })
}

async function createHabit(habit: any){
return await box.habit.create(habit)
}

async function delHabits(id: string){
  return await box.habit.delete({ where: { id: id } });
}

async function completeHabit(id: string, date: string){
  let habit: any = await box.habit.findOne({ where: {  id: id } });
  habit.completed = [...habit.completed, date];
  return await habit.save();
}
export { getHabits, createHabit, delHabits, completeHabit, getid}
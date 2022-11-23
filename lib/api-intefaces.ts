export interface Habit {
  id: string;
  habit: string;
  deletedAt: Date;
  completed: Date[];
  userId: string;
}

export interface User {
  email: string;
  userId: string;
  habits: Habit[];
}

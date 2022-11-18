export interface Habit {
  habit: string;
  deletedAt: Date;
  completed: Date[];
}

export interface User {
  id: number;
  email: string;
  password: string;
}

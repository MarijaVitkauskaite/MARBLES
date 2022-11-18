export interface Habit {
  habit: string;
  deletedAt: Date;
  completed: Date[];
}

export interface USer {
  id: number;
  email: string;
  password: string;
}

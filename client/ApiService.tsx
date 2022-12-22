import { User } from '../lib/api-intefaces'

const REACT_APP_LOCAL_IP = 'http://192.168.0.30:3001'

export const register = async (user: User): Promise<User> => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/register`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const login = async (user: User): Promise<User> => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/login`, {
      method: 'PUT',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const sendHabits = async (habit: string, userId: string): Promise<User> => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ habit, userId }),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const deleteHabits = async (id: string): Promise<User> => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits/delete/${id}`, {
      method: 'DELETE',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

export const completeHabits = async (id: string, selectedDate: Date): Promise<User> => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits/complete/${id}`, {
      method: 'PUT',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedDate }),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};


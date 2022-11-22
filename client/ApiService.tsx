import { REACT_APP_LOCAL_IP } from '@dotenv';
import { User, Habit } from '../lib/api-intefaces'

export const register = async (user: User) => {
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
    return console.log(err);
  }
};

export const login = async (user: User) => {
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/login`, {
      method: 'GET',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

export const sendHabits = async (habits: string) => {
  // TODO NEED TO RETURN UPDATED USER FROM BACKEND
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits`, {
      method: 'POST',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({habits}),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

export const getHabits = async (selectedDate) => {
  // TODO NOT IN USE?
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits`, {
      method: 'PUT',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedDate }),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

export const deleteHabits = async (habit: Habit, selectedDate) => {
    // TODO NEED TO RETURN UPDATED USER FROM BACKEND after habits has been deleted
  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits/delete/${habit.id}`, {
      method: 'DELETE',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedDate }),
    });
    return await res.json();
  } catch (err) {
    return console.log(err);
  }
};

export const completeHabits = async (habit: Habit, selectedDate) => {
    // TODO NEED TO RETURN UPDATED USER FROM BACKEND and add  selectedDate to complete

  try {
    const res = await fetch(`${REACT_APP_LOCAL_IP}/habits/complete/${habit.id}`, {
      method: 'PUT',
      credentials: 'include',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedDate }),
    });
    return await res.text();
  } catch (err) {
    return console.log(err);
  }
};


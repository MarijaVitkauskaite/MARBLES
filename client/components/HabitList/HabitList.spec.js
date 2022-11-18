import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HabitList from './HabitList';

describe('Habit-list component', () => {
  const mockDate = new Date();
  const habits = [
    {
      habit: 'shower',
      deletedAt: mockDate,
      completed: [mockDate, mockDate],
    },
    {
      habit: 'eat',
      deletedAt: mockDate,
      completed: [mockDate, mockDate],
    },
    {
      habit: 'sleep',
      deletedAt: mockDate,
      completed: [mockDate, mockDate],
    },
  ];
  test('Should properly render with the right number of habits', async () => {
    const list = render(<HabitList habits={habits} selectedDate={mockDate} getHabits={() => 1} />);
    expect(await list.findByText('shower'));
    expect(await list.findByText('eat'));
    expect(await list.findByText('sleep'));
    expect(await list.findByTestId('container'));
  });
});

import React from 'react';
import Habits from './habits';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react-native';

describe('Habits component', () => {
  const tree = renderer.create(<Habits />);
  global.fetch = jest.fn();

  test('Habits renders correctly', () => {
    const tree = renderer.create(<Habits />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Habits have 3 children', () => {
    const tree = renderer.create(<Habits />).toJSON();
    expect(tree.children.length).toBe(3);
  });
  test('Should render Calendar', async () => {
    const calendar = tree.root.findByProps({ testID: 'calendar' }).props;
    expect(calendar).toBeTruthy();
  });
  test('Should render Habits list', async () => {
    const habits = tree.root.findByProps({ testID: 'habit-list' }).props;
    expect(habits).toBeTruthy();
  });
});

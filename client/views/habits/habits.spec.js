import React from 'react';
import renderer from 'react-test-renderer';
import Habits from './habits';

describe('Habits component', () => {
  test('Habits renders correctly', () => {
    const tree = renderer.create(<Habits />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Habits have 3 children', () => {
    const tree = renderer.create(<Habits />).toJSON();
    expect(tree.children.length).toBe(3);
  });
});

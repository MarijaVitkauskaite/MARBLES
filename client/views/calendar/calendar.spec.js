import React from 'react';
import renderer from 'react-test-renderer';
import Calendar from './calendar';

describe('Calendar component', () => {
  test('Calendar renders correctly', () => {
    const tree = renderer.create(<Calendar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Calendar have 3 children', () => {
    const tree = renderer.create(<Calendar />).toJSON();
    expect(tree.children.length).toBe(2);
  });
});

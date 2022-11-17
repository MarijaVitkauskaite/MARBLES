import React from 'react';
import renderer from 'react-test-renderer';
import CalendarScroll from './calendar';
import { screen, render } from '@testing-library/react';

describe('Calendar component', () => {
  test('Calendar renders correctly', () => {
    const tree = renderer.create(<CalendarScroll />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Calendar have 3 children', () => {
    const tree = renderer.create(<CalendarScroll />).toJSON();
    expect(tree.children.length).toBe(2);
  });
  test('Should render', () => {
    render(<CalendarScroll />);
    screen.getByTestId('list');
  });
});

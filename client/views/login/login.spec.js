import React from 'react';
import renderer, { act } from 'react-test-renderer';
import Login from './login';
import { Alert } from 'react-native';

jest.spyOn(Alert, 'alert');
const tree = renderer.create(<Login />)

test('renders correctly', () => {
  const treejson = renderer.create(<Login />).toJSON();
  expect(treejson).toMatchSnapshot();
});
test('should trigger alert when click login button without email input', async () => {
  // const mockOnPress = jest.fn()
  const button = tree.root.findByProps({ testID: "login-button" }).props;
  const errorMessageText = 'Please enter email address'
  await act(async () => button.onPress());
  expect(Alert.alert).toHaveBeenCalledWith(errorMessageText)

})



// Alert.alert('Title', 'Message', [{text: 'OK', onPress: mockOnPress}])

// /**
//  * here we inspect the mock to get:
//  * - the latest call to Alert.alert (`calls[0]`)
//  * - its third argument (`calls[0][2]`), which is the buttons config array
//  * - the first button in the array and its onPress (`calls[0][2][0].onPress()`)
//  */
// Alert.alert.mock.calls[0][2][0].onPress()

// expect(mockOnPress).toBeCalled()
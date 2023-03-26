import {showMessage} from 'react-native-flash-message';
import {colorTutor_} from './color';

export const errorMessage = description => {
  showMessage({
    type: 'danger',
    icon: 'auto',
    message: 'Warning',
    description: description,
    floating: true,
    backgroundColor: 'red',
    style: {alignItems: 'center'},
  });
};

export const successMessage = description => {
  showMessage({
    type: 'success',
    icon: 'auto',
    message: 'Success',
    description: description,
    floating: true,
    backgroundColor: colorTutor_.blue,
    style: {alignItems: 'center'},
  });
};
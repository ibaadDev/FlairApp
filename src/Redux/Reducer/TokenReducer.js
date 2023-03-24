import types from '../types';

const initial_state = {
  token: '',
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.LoginTypeToken:
      const data = action.payload;
      console.log(11, data);
      return (state.token = data);
      break;
    case types.LogoutType:
      return {
        token: '',
      };
      break;
    case 'ssd':
      const updatedData = action.payload;
      return {...state, token: ''};
      break;
    default:
      return {...state};
      break;
  }
}

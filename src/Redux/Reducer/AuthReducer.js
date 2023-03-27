import types from '../types';

const initial_state = {
  userData: {},
  token: '',
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case types.LoginType:
      const data = action.payload;
      return {
        userData: data.user,
        token: data.access_token,
      };
      break;
    case types.LogoutType:
      return {
        userData: {},
        token: '',
      };
      break;
    case types.UpdateProfile:
      const updatedData = action.payload;
      return {...state, userData: updatedData.data};
      break;
      // case types.Tranding:
      //   const trandingdata = action.payload;
      //   console.log(trandingdata)
      //   return{...state , Trandingdata:trandingdata.data}
        
    default:
      return {...state};
      break;
      
  }
}

import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AuthReducer from './AuthReducer';
// import TokenReducer from './TokenReducer';
import isApplunchFirst from './isApplunchFirst';
const persistConfig1 = {
  key: 'auth',
  storage: AsyncStorage,
  whitelist: ['userData', 'token'],
};
const persistConfig2 = {
  key: 'isApplunchFirst',
  storage: AsyncStorage,
  whitelist: 'IsApplunchFirst',
};
// const persistConfig2 = {
//   key: 'AccesToken',
//   storage: AsyncStorage,
//   whitelist: 'token',
// };

// const persistConfig3 = {
//   key: 'pendingPackages',
//   storage: AsyncStorage,
//   whitelist: 'PendingPackages',
// };

// const rootReducer = combineReducers({
//   userData: persistReducer(persistConfig1, auth),
// });

export const store = configureStore({
  reducer: {
    userData: persistReducer(persistConfig1, AuthReducer),
    // token: persistReducer(persistConfig2, TokenReducer),
    // token: persistReducer(persistConfig2, token),
    IsApplunchFirst: persistReducer(persistConfig2, isApplunchFirst),
    // PendingPackages: persistReducer(persistConfig3, pendingPackages),
  },
});
export const persistor = persistStore(store);

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MybottomTabs from './bottomnavigation';
import { screens } from '../screens';
const Stack = createNativeStackNavigator();

export default function StackNavigatior() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_left',
          headerShown: false,
        }}>
        <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
        <Stack.Screen name='Login' component={screens.Login}/>
        <Stack.Screen name='SignUp' component={screens.SignUp}/>
        <Stack.Screen name='ForgetScreen' component={screens.ForgetScreen}/>
        <Stack.Screen name="HomeScreen" component={screens.Feed} />
        <Stack.Screen name="GalleryScreen" component={screens.Post} />
        <Stack.Screen
          name="ConnectGalleryScreen"
          component={screens.Post}
        />
        {/* <Stack.Screen
          name="Home"
          component={screens.Home}
        /> 
         <Stack.Screen
        name="Category"
        component={screens.Category}
      />
         <Stack.Screen
        name="Setting"
        component={screens.Setting}
      />
         <Stack.Screen
        name="CartList"
        component={screens.CartList}
      />
         <Stack.Screen
        name="CrudCartList"
        component={screens.CrudCartList}
      /> */}
      </Stack.Navigator>
    </>
  );
}

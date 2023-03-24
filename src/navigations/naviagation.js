import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as Screens from '../screens/index';

import MybottomTabs from './bottomnavigation';
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
        <Stack.Screen name="HomeScreen" component={Screens.HomeScreen} />
        <Stack.Screen name="GalleryScreen" component={Screens.GalleryScreen} />
        <Stack.Screen
          name="ConnectGalleryScreen"
          component={Screens.ConnectGalleryScreen}
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

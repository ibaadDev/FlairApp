import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { screens } from '../Screens';
import Bottomnavigation from './bottomnavigation';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

export default function StackNavigatior() {
  const {userData, token} = useSelector(state => state.userData);
    return(
    <>
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
      }}>
        {token == '' ?
        (
          <>
        <Stack.Screen
        name='login'
        component={screens.LoginScreen}
        />
        <Stack.Screen
        name='SignUp'
        component={screens.SignUpScreen}
        />
        </>
        )
        : 
        (<>
      <Stack.Screen
              name="Bottomnavigation"
              component={Bottomnavigation}
            />
             <Stack.Screen
            name="dashboard"
            component={screens.DashboardScreen}
          />
             <Stack.Screen
            name="register"
            component={screens.RegisterScreen}
          />
             <Stack.Screen
            name="servicedashboard"
            component={screens.ServicesDashboardScreen}
          />
          </>)
    }
            </Stack.Navigator>
        </>
    );
}
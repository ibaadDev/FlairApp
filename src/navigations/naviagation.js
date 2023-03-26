import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MybottomTabs from './bottomnavigation';
import { screens } from '../screens';
const Stack = createNativeStackNavigator();
import {useSelector} from 'react-redux';

export default function StackNavigatior() {
  const {userData, token} = useSelector(state => state.userData);
  return (
    <>
    {console.log(token)}
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_left',
          headerShown: false,
        }}>
            {token != '' ?
        (
          <>
          <Stack.Screen name="MybottomTabs" component={MybottomTabs} />
          <Stack.Screen name="Feed" component={screens.Feed} />
          <Stack.Screen name="Post" component={screens.Post} />
          <Stack.Screen name="Comment" component={screens.Comment}/>
          <Stack.Screen name="CreatePost" component={screens.CreatePost}/>
          <Stack.Screen name="Followers" component={screens.Followers}/>
          <Stack.Screen name="Tranding" component={screens.Tranding}/>
          <Stack.Screen name="MyFollowing" component={screens.MyFollowing}/>
          <Stack.Screen name="MyFollower" component={screens.MyFollower}/>
          <Stack.Screen name="Spotlight" component={screens.Spotlight}/>
          <Stack.Screen name="MyProfile" component={screens.MyProfile}/>
          <Stack.Screen name="EditProfile" component={screens.EditProfile}/>
          <Stack.Screen name="OthersProfile" component={screens.OthersProfile}/>
          </>
        )
        : 
        (
          <>
          <Stack.Screen name='Login' component={screens.Login}/>
          <Stack.Screen name='SignUp' component={screens.SignUp}/>
          <Stack.Screen name='ForgetScreen' component={screens.ForgetScreen}/>
          </>
          
        )
}
      </Stack.Navigator>
    </>
  );
}

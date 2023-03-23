import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform, Dimensions, StyleSheet, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
// import { screens } from '../Screens';
import { color } from '../config/color';
import StackNavigatior from './navigation';
const Tab = createBottomTabNavigator();
function Bottomnavigation() {
    return (
    <Tab.Navigator
    initialRouteName="dashboard"
    screenOptions={({route}) => ({
      orientation: 'portrait',
        tabBarActiveTintColor: color.black,
        tabBarInactiveTintColor: '#560f09',
        headerShown: false,
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarLabel:() => {return null},
        tabBarStyle: {
          position: 'absolute',
          marginBottom:hp('1'),
          marginHorizontal:wp('4'),
          elevation: 25,
          height: Platform.OS == 'android' ? hp('7') : hp('9'),
          backgroundColor: color.white,
          borderRadius:25
          ,
        },
      })}
    >
         <Tab.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                // backgroundColor: focused
                //   ? MentorColor.MentorLightTheme
                //   : 'white',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: Math.round(
                  Dimensions.get('window').width +
                    Dimensions.get('window').height,
                ),
                width: Dimensions.get('window').width * 0.16,
                height: Dimensions.get('window').width * 0.16,
              }}>
              <Entypo
                name={'text-document'}
                color={focused ? '#560f09' : '#560f09'}
                size={hp('3.2')}
              />
            </View>
          ),
        }}
        component={screens.DashboardScreen}
      />
         <Tab.Screen
        name="home"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                // backgroundColor: focused
                //   ? MentorColor.MentorLightTheme
                //   : 'white',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: Math.round(
                  Dimensions.get('window').width +
                    Dimensions.get('window').height,
                ),
                width: Dimensions.get('window').width * 0.16,
                height: Dimensions.get('window').width * 0.16,
              }}>
              <AntDesign
                name={'calendar'}
                color={focused ? '#560f09' : '#560f09'}
                size={hp('3.2')}
              />
            </View>
          ),
        }}
        component={screens.AllDashboardList}
      />
         <Tab.Screen
        name="checking"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                // backgroundColor: focused
                //   ? MentorColor.MentorLightTheme
                //   : 'white',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: Math.round(
                  Dimensions.get('window').width +
                    Dimensions.get('window').height,
                ),
                width: Dimensions.get('window').width * 0.16,
                height: Dimensions.get('window').width * 0.16,
              }}>
              <MaterialIcons
                name={'photo-library'}
                color={focused ? '#560f09' : '#560f09'}
                size={hp('3.2')}
              />
            </View>
          ),
        }}
        component={screens.AboutUsScreen}
      />
         <Tab.Screen
        name="setting"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <View
              style={{
                // backgroundColor: focused
                //   ? MentorColor.MentorLightTheme
                //   : 'white',
                alignSelf: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: Math.round(
                  Dimensions.get('window').width +
                    Dimensions.get('window').height,
                ),
                width: Dimensions.get('window').width * 0.16,
                height: Dimensions.get('window').width * 0.16,
              }}>
              <MaterialCommunityIcons
                name={'calendar-plus'}
                color={focused ? '#560f09' : '#560f09'}
                size={hp('3.2')}
              />
            </View>
          ),
        }}
        component={screens.RegisterScreen}
      />

    </Tab.Navigator>
    )
}
export default Bottomnavigation;
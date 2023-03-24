import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Dimensions, StyleSheet} from 'react-native';
import {Colors} from '../theme/Variables';
import * as Screens from '../screens/index';

const Tab = createBottomTabNavigator();
function MybottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Profile"
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.black,
        tabBarInactiveTintColor: Colors.blueMenu,
        headerShown: false,
        // tabBarActiveBackgroundColor: '#EFEFEF',
        // tabBarInactiveBackgroundColor: '#EFEFEF',
        tabBarHideOnKeyboard: true,
        swipeEnabled: true,
        animationEnabled: true,
        tabBarStyle: {
          // shadowColor: '#000',
          // shadowOffset: {
          //   width: 0,
          //   height: 8,
          // },
          // shadowOpacity: 0.46,
          // shadowRadius: 11.14,

          // elevation: 17,
          // height: hp('9'),
          // paddingBottom: hp('0'),
          // borderTopRightRadius: 35,
          // borderTopLeftRadius: 35,
          // bottom: Platform.OS == 'ios' ? hp('2') : hp('1'),
          // width: wp('100'),
          // alignSelf: 'center',
          // borderRadius: Platform.OS == 'android' ? 10 : 20,
          // overflow: 'hidden',
          position: 'absolute',
          elevation: 0,
          height: Platform.OS == 'android' ? hp('8') : hp('10'),
          backgroundColor: '#EFEFEF',
          borderTopLeftRadius: wp('8'),
          borderTopRightRadius: wp('8'),
        },
      })}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <AntDesign
              style={{marginTop: hp('1')}}
              name={'home'}
              color={color === '#000000' ? '#561CE0' : '#000000'}
              size={hp('3.5')}
            />
          ),
          title: '',

          // tabBarLabelStyle: {
          //   fontSize: 15,
          //   marginBottom: hp('1'),
          //   color: '#000000',
          //   fontWeight: 'bold',

          //   // ...globalStyles.globalTextStyles3,
          // },
        }}
        component={Screens.HomeScreen}
      />
      <Tab.Screen
        name="Category"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              style={{marginTop: hp('1')}}
              name={color == '#ffff' ? 'home' : 'home-outline'}
              color={color === '#000000' ? '#561CE0' : '#000000'}
              size={hp('3.5')}
            />
          ),
          title: '',
          // tabBarLabelStyle: {
          //   fontSize: 15,
          //   marginBottom: hp('1'),
          //   color: '#000000',
          //   fontWeight: 'bold',

          //   // ...globalStyles.globalTextStyles3,
          // },
        }}
        component={Screens.GalleryScreen}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <MaterialCommunityIcons
              style={{marginTop: hp('1')}}
              name={'shape-circle-plus'}
              color={color === '#000000' ? '#561CE0' : '#000000'}
              size={hp('3.5')}
            />
          ),
          title: '',
          // tabBarLabelStyle: {
          //   fontSize: 15,
          //   marginBottom: hp('1'),
          //   color: '#000000',
          //   fontWeight: 'bold',

          //   // ...globalStyles.globalTextStyles3,
          // },
        }}
        component={Screens.ConnectGalleryScreen}
      />
      <Tab.Screen
        name="Profile1"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Feather
              style={{marginTop: hp('1')}}
              name={'trending-up'}
              color={color === '#000000' ? '#561CE0' : '#000000'}
              size={hp('3.5')}
            />
          ),
          title: '',
          // tabBarLabelStyle: {
          //   fontSize: 15,
          //   marginBottom: hp('1'),
          //   color: '#000000',
          //   fontWeight: 'bold',

          //   // ...globalStyles.globalTextStyles3,
          // },
        }}
        component={Screens.ConnectGalleryScreen}
      />
      <Tab.Screen
        name="Profile2"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesome
              style={{marginTop: hp('1')}}
              name={'user-o'}
              color={color === '#000000' ? '#561CE0' : '#000000'}
              size={hp('3.5')}
            />
          ),
          title: '',
          // tabBarLabelStyle: {
          //   fontSize: 15,
          //   marginBottom: hp('1'),
          //   color: '#000000',
          //   fontWeight: 'bold',

          //   // ...globalStyles.globalTextStyles3,
          // },
        }}
        component={Screens.ConnectGalleryScreen}
      />

      {/* <Tab.Screen
        name="Setting"
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Ionicons
              name={color == '#ffff' ? 'home' : 'home-outline'}
              color={color === '#000000' ? 'silver' : '#000000'}
              size={hp('3')}
            />
          ),
          title: 'Setting',
          tabBarLabelStyle: {
            fontSize: 15,
            marginBottom: hp('1'),
            color: '#000000',
            fontWeight: 'bold',
            // ...globalStyles.globalTextStyles3,
          },
        }}
        component={screens.Setting}
      /> */}
    </Tab.Navigator>
  );
}
export default MybottomTabs;

const styles = StyleSheet.create({
  cartCircle: {
    backgroundColor: Colors.blackDark,
    position: 'absolute',
    bottom: hp('-2'),
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.18,
    height: Dimensions.get('screen').width * 0.18,
    alignContent: 'center',
    justifyContent: 'center',
  },
  cartInsideCircle: {
    backgroundColor: Colors.barFaded,
    position: 'absolute',
    borderRadius: Math.round(
      Dimensions.get('window').width + Dimensions.get('window').height,
    ),
    alignSelf: 'center',
    width: Dimensions.get('screen').width * 0.15,
    height: Dimensions.get('screen').width * 0.15,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'white',
  },
  badgeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    fontSize: hp('1.5'),
    backgroundColor: Colors.backgroundBlue,
  },
});

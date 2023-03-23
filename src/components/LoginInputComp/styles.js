import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {color} from '../color';

export const styles = StyleSheet.create({
  textinput: {
    color: 'white',
    fontSize: hp('2'),
  },
  inputtext: {
    fontSize: hp('2'),
  },
  inputView: {
    borderRadius: 5,
    paddingLeft: wp('3'),
    marginTop: hp('1'),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: wp('80'),
    height: Platform.OS == 'ios' ? hp('5.5') : hp('6'),
    backgroundColor: 'white',
  },
});

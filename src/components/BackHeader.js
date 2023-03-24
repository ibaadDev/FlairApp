import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../config/responsive';
import {Colors} from '../theme/Variables';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextComponent} from './TextComponent';

const BackHeader = ({title, onPress}) => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={onPress} style={styles.leftView}>
        <Ionicons name="chevron-back" color={Colors.white} size={hp('3')} />
      </TouchableOpacity>
      <View style={styles.centerView}>
        <TextComponent text={title} styles={styles.centerText} />
      </View>
      <View style={styles.rightView}>
        {/* <Image
          source={{uri: userData?.profilePicture}}
          style={styles.profilePicture}
          resizeMode="contain"
        /> */}
      </View>
    </View>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  mainView: {
    width: wp('100'),
    height: hp('8'),
    flexDirection: 'row',
    backgroundColor: Colors.primaryFaded,
  },
  leftView: {
    width: wp('20'),
    justifyContent: 'center',
    height: 'auto',
    paddingLeft: wp('2'),
  },
  centerView: {
    width: wp('60'),
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
  },
  centerText: {
    fontSize: hp('3'),
    color: Colors.white,
  },
  rightView: {
    width: wp('20'),
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
  },
  profilePicture: {
    width: wp('13'),
    height: hp('6'),
    borderRadius: 10,
    backgroundColor: Colors.gray,
  },
});

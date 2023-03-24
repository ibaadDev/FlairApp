import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../theme/Variables';
import {hp, wp} from '../config/responsive';

const BottomHeader = ({title, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container}}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default BottomHeader;

const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    width: wp('100'),
    height: hp('10'),
    backgroundColor: Colors.primaryFaded,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    position: 'absolute',
    bottom: 0,
  },
  text: {
    fontSize: hp('2'),
    color: Colors.white,
  },
});

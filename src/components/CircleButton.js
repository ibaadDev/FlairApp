import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const CircleButton = ({text, onPress, bg, texColor, isBool}) => {
  // const [isBool,setBool]=useState(false);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: bg,
        ...styles.container,
        borderColor: isBool ? 'white' : 'grey',
      }}>
      <Text style={{...styles.textContainer, color: texColor}}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,

    borderRadius: 50,
    padding: 6,
    width: wp('23'),
    // backgroundColor: '#561CE0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

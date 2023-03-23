import React from 'react';
import {Text} from 'react-native';
import {color} from '../config/color';
export const TextComp = props => {
  let color = props?.color ?? 'black';
  return (
    <Text
      numberOfLines={props?.numberOfLines}
      style={{color: color, ...props?.style}}>
      {props?.text}
    </Text>
  );
};

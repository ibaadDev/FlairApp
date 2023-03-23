import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {color, colorTutor_} from '../../config/color';

export const LoginInputComp = props => {
  return (
    <View
      style={{
        ...styles.inputView,
        ...props?.style,
        borderColor:
          props?.isFocused == true
            ? color.textSecondaryColor
            : props?.value != ''
            ? color.white
            : color.borderThirdColor
          ,
        borderWidth: props?.isFocused == true ? 2 : 1.5,
        backgroundColor: color.textinputback,
      }}>
      {props.firstIcon && (
        <Ionicons
          onPress={props?.firstIconPress}
          name={props?.firstIcon}
          color={props?.firstIconColor}
          style={{
            marginRight: wp('2'),
          }}
          size={hp('2')}
        />
      )}
      {props.changeFirstIcon && props.changeFirstIcon}
      {props.leftDivider && props.leftDivider}
      <TextInput
        style={{
          color: 'black',
          fontSize: hp('2'),
          flex: 1,
          backgroundColor: color.textinputback,
          ...props.inputStyle,
        }}
        maxLength={props?.maxLength}
        onSubmitEditing={props?.onSubmitEditing}
        {...props.otherProps}
        onChange={props?.onChange}
        onEndEditing={props?.onEndEditing}
        onSelectionChange={props?.onSelectionChange}
        onPressOut={props?.onPressOut}
        ref={props?.ref}
        placeholder={props?.placeholder}
        placeholderTextColor={color.greyTextcolor}
        multiline={props?.multiline}
        keyboardType={props?.keyboardType}
        secureTextEntry={props?.secureTextEntry}
        editable={props?.editable}
        onChangeText={props?.onChangeText}
        value={props?.value}
        onFocus={props?.onFocus}
        onBlur={props?.onBlur}
        autoCapitalize={props?.autoCapitalize}
      />

      {props?.Ionicons ? (
        <Ionicons
          onPress={props?.eyeIconPress}
          name={props?.eyeIconName}
          color={
            props?.isFocused == true
              ? color.textSecondaryColor
              : colorTutor_.ipalforgetTxtColor
          }
          style={{
            marginLeft: 'auto',
            marginRight: wp('3'),
            paddingLeft: wp('2'),
          }}
          size={props?.eyeIconSize ?? hp('3')}
        />
      ) : props?.Entypo ? (
        <Entypo
          onPress={props?.eyeIconPress}
          name={props?.eyeIconName}
          color={
            props?.isFocused == true
              ? color.textSecondaryColor
              : colorTutor_.ipalforgetTxtColor
          }
          style={{
            marginLeft: 'auto',
            marginRight: wp('3'),
            paddingLeft: wp('2'),
          }}
          size={props?.eyeIconSize ?? hp('3')}
        />
      ) : (
        <MaterialIcons
          onPress={props?.eyeIconPress}
          name={props?.eyeIconName}
          color={
            props?.isFocused == true
              ? color.textSecondaryColor
              : colorTutor_.ipallightGreen
          }
          style={{
            marginLeft: 'auto',
            marginRight: wp('3'),
            paddingLeft: wp('2'),
          }}
          size={props?.eyeIconSize ?? hp('3')}
        />
      )}
    </View>
  );
};

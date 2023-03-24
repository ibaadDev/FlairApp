import { StyleSheet } from "react-native";
import { color } from "../../config/color";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

  export const styles = StyleSheet.create({

    container: {
        padding: 10,
        backgroundColor: '#EFEFEF',
      },
      innerContainer: {
        width: wp('90'),
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      image: {
        width: wp('20'),
        height: hp('10'),
        borderRadius: 50,
        marginRight: wp('1'),
      },
      text1: {
        fontWeight: '500',
        color: 'black',
        fontSize: hp('2.5'),
      },
      text3Container: {
        width: wp('40'),
      },
      text3: {
        letterSpacing: 0.2,
        color: 'black',
        fontSize: hp('1.8'),
      },
      divider: {
        marginTop: hp('1'),
        backgroundColor: '#EFEFEF',
        width: wp('86'),
        height: hp('0.1'),
        alignSelf: 'center',
        marginBottom: hp('1'),
      },
      bottomContainer: {
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: wp('2'),
        width: wp('83'),
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      bottomText: {
        fontWeight: 'bold',
        fontSize: hp('2'),
      },
})
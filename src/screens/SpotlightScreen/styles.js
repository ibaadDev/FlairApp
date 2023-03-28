import { StyleSheet } from "react-native";
import { color } from "../../config/color";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

  export const styles = StyleSheet.create({
    mainContainer:{
      height:hp('100'),
      width:wp('100'),
      backgroundColor:'white'
    },
    imagestyle:{
        marginTop:hp('2'),
        width:wp('88'),
        height:hp('25'),
        borderRadius:20,
        justifyContent:'center',
     },
     commintsView:{
        flexDirection:'row',
        marginVertical:hp('2')
     },
    container: {
        padding: 20,
        margin:3,
        borderRadius:10,
        backgroundColor: '#F9F9F9',
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
        flexDirection:'row',
        width: wp('40'),
      },
      folowtxt:{
        marginLeft:wp('2'),
        fontSize:hp('2'),
        color:'#561CE0'
      },
      text2:{
        fontSize:hp('2')
      },
      text3: {
        letterSpacing: 0.2,
        color: 'black',
        fontSize: hp('1.8'),
      },
      divider: {
        marginTop: hp('1'),
        backgroundColor: color.greyTextcolor,
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
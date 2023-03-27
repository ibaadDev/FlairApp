import { Dimensions, StyleSheet } from "react-native";
import { color, colorTutor_ } from "../../config/color";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    mainContainer:{
        width:wp('100'),
        height:hp('100'),
         backgroundColor:'white'
     },
     imagestyle:{
        width:wp('100'),
        height:hp('50')
     },
     Textstyle:{
        width:wp('100'),
        height:hp('50')
     },
     commintsView:{
        flexDirection:'row',
        marginVertical:hp('2')
     },
     innerView:{
        flexDirection:'row',
        width:wp('100'),
        paddingHorizontal:wp('6')
    },
    MainName:{
        color:color.black,
        fontWeight:'bold',
        fontSize:hp('2.5')
    },
    secondText:{
        fontSize:hp('1.8'),
        color:color.black
    },
    viewall:{
        marginLeft:wp('6')
    }
})
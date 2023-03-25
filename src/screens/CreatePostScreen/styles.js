import { Dimensions, StyleSheet } from "react-native";
import { color, colorTutor_ } from "../../config/color";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    upperContainer:{
        backgroundColor:color.createcrossbackground,
        height:hp('4'),
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
    },
    crossimage:{
        height:hp('2'),
        width:wp('4')
    },
    textinput:{
        marginLeft:wp('5'),
        fontSize:hp('3')
    },
    bottomView:{
        shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5,
    position: 'absolute',
    backgroundColor:'white',
    bottom: hp('6'),
    height:hp('40'),
    width: wp('100'),
    paddingHorizontal:wp('10'),
    paddingVertical:hp('3')
    },
    touchContent:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:hp('4')
    },
    imagetext:{
        color:color.black,
        fontSize:hp('3'),
        marginLeft:wp('3')
    },
})
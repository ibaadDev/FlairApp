import { StyleSheet } from "react-native";
import { color } from "../../config/color";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    HederText:{
        fontSize:hp('2.5'),
        color:color.black,
        // marginLeft:wp('30')
    },
    logo:{
        flexDirection:'row',
    },
    image:{
    width:wp('3'),
    height:hp('3')
    },
    texthead:{
        color:color.black,
        fontSize:hp('3'),
        fontWeight:"bold",
        marginLeft:wp('2')
    }
})
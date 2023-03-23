import { StyleSheet } from "react-native";
import { color } from "../../config/color";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'white'
    },
    HederText:{
        fontSize:hp('2.5'),
        color:color.black,
        marginLeft:wp('30')
    },
    backarrowstyle:{
    }

})
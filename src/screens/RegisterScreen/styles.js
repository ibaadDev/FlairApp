import { StyleSheet } from "react-native";
import { color } from "../../config/color";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'white'
    },
    name:{
        fontSize:hp('4'),
        color:color.black,
        fontWeight:'bold'
    },
    signBtn:{
        marginTop:hp('2')
    },
    forgetbtnstyle:{
        alignSelf:'flex-end',
        margin:10
    },
    forgettext:{
        color:color.primaryColor,
        fontSize:hp('1.8'),
        fontWeight:'600',
    },
    creatacc:{
        flexDirection:'row',
        margin:10
    },
    logo:{
        marginBottom:hp('8')
    }
})
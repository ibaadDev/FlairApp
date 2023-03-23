import { Dimensions, StyleSheet } from "react-native";
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
    upperView:{
        flexDirection:'row',
    },
    roundImage:{
        borderRadius: Math.round(
            Dimensions.get('window').width + Dimensions.get('window').height,
          ),
          width: Dimensions.get('window').width * 0.13,
          height: Dimensions.get('window').width * 0.13,
    }

})
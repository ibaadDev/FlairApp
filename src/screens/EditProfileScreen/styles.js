import { Dimensions, StyleSheet } from "react-native";
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
      imagestyles:{
        borderRadius: Math.round(
            Dimensions.get('window').width + Dimensions.get('window').height,
          ),
          width: Dimensions.get('window').width * 0.40,
          height: Dimensions.get('window').width * 0.40,
      },
      midView:{
        alignItems:'center',
          marginTop:hp('6')
      },
      changeProfile:{
        fontSize:hp('2'),
        marginTop:hp('2'),
        color:color.primaryColor
      },
      textinputstyle:{
        borderBottomColor:color.greyTextcolor,
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center'
      },
      editView:{
        marginVertical:hp(1),
        marginHorizontal:wp('4')
      },
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
    savebtn:{
        backgroundColor:color.primaryColor,
        width:wp('20'),
        height:hp('5'),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        alignSelf:'flex-end',
        margin:10
    }
  })
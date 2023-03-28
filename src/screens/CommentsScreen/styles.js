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
    roundImage:{
        backgroundColor:'red',
        borderRadius: Math.round(
            Dimensions.get('window').width + Dimensions.get('window').height,
          ),
          width: Dimensions.get('window').width * 0.13,
          height: Dimensions.get('window').width * 0.13,
    },
    upperView:{
        flexDirection:'row',
        marginHorizontal:wp('2'),
    },
    mainimage:{
        marginHorizontal:wp('2'),
       
    },
    MainName:{
        color:color.black,
        fontWeight:'bold',
        fontSize:hp('2.5')
    },
    Secondimage:{
        marginHorizontal:wp('4'),
        width:wp('2'),
        height:hp('2'),
        borderRadius: Math.round(
            Dimensions.get('window').width + Dimensions.get('window').height,
          ),
          width: Dimensions.get('window').width * 0.20,
          height: Dimensions.get('window').width * 0.20,
    },
    secondName:{
        color:color.black,
        fontWeight:'bold',
        fontSize:hp('2')
    },
    innerView:{
        flexDirection:'row',
        width:wp('70')
    },
    SecondinnerView:{
        marginLeft:wp('2'),
    },
    secondText:{
        fontSize:hp('1.8'),
        color:color.black
    },
    secondNameText:{
        fontSize:hp('1.8'),
        color:color.black
    },
    Divider:{
        backgroundColor:color.greyTextcolor,
        width:wp('80'),
        height:hp('0.1'),
        alignSelf:'center',
        marginVertical:hp('2')
    },
    otherView:{
        flexDirection:'row',
        marginHorizontal:wp('4'),
        marginVertical:hp('2')

    },
    time:{
        color:color.greyTextcolor,
        fontSize:hp('2')
    },
    bottomBar: {
        position: 'absolute',
        backgroundColor: color.white,
        justifyContent:'center',
        height: hp('9'),
        bottom: hp('4'),
        width: wp('100'),
        paddingHorizontal: wp('10'),
      },
      bottomViewInsider:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection:'row'
      },
      BottomDivider:{
        backgroundColor:color.greyTextcolor,
        width:wp('80'),
        height:hp('0.1'),
        alignSelf:'center',
        marginBottom:hp('10')
      },

})
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
    container: {
        borderWidth: 1.5,
    
        borderRadius: 50,
        padding: 6,
        width: wp('23'),
        // backgroundColor: '#561CE0',
        justifyContent: 'center',
        alignItems: 'center',
      },
    followingcontainer: {
        borderWidth: 1.5,
    
        borderRadius: 50,
        padding: 6,
        width: wp('30'),
        // backgroundColor: '#561CE0',
        justifyContent: 'center',
        alignItems: 'center',
      },
      textContainer: {
        fontWeight: 'bold',
      },
      upperrow:{
        paddingHorizontal:wp('6'),
        flexDirection:'row',
        justifyContent:'space-around'
      },
      imagestyles:{
        borderRadius: Math.round(
            Dimensions.get('window').width + Dimensions.get('window').height,
          ),
          width: Dimensions.get('window').width * 0.28,
          height: Dimensions.get('window').width * 0.28,
      },
      midView:{
        alignItems:'center',
          marginTop:hp('6')
      },
      username:{fontSize:hp('3'),
      color:color.black,
    fontWeight:'500'
    },
    secondText:{
        color:color.greyTextcolor,
        fontSize:hp('2'),
        fontWeight:"400"
    },
    ThirdText:{
        marginTop:hp('2'),
        width:wp('80'),
        textAlign:"center",
        fontSize:hp('2'),
        color:color.black
    },
    editprofilerow:{
        flexDirection:'row',
        marginTop:hp('2')
    },
    editprofileconatiner:{
        borderWidth: 1.5,
        borderRadius: 50,
        padding: 6,
        width: wp('28'),
        height:hp('5'),
        marginTop:hp('2'),
        marginHorizontal:wp('2'),
        // backgroundColor: '#561CE0',
        justifyContent: 'center',
        alignItems: 'center',
    },

})
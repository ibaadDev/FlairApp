import { View, Text, Image } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { styles } from './styles';

const HeaderComponent = (props) => {
  return (
    <View style={{
      flexDirection:'row',
      marginVertical:hp('2'),
      marginHorizontal:wp('1.5'),
      justifyContent:'space-between'}}>
      {props.back?
        <Ionicons
            // onPress={() => props.navigation.goBack()}
            style={styles.backarrowstyle}
            name="arrow-back"
            size={hp('3')}
            color="black"
            onPress={props?.backpress}
          />
          :
          <View style={styles.logo}>
            <Image source={require('../../images/Group6.png')}
            style={styles.image}
            />
            <Text style={styles.texthead}>Flair</Text>

          </View>
          }
            <Text style={styles.HederText}>{props?.name}</Text>
            <View>
              {props?.text&&
              <Text style={{color:'white'}} >
              ddsadas
              </Text>}
            </View>
        </View>
  )
}

export default HeaderComponent
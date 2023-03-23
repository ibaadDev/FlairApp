import { View, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { styles } from './styles';

const HeaderComponent = () => {
  return (
    <View style={{flexDirection:'row',marginVertical:hp('2'),marginHorizontal:wp('1.5')}}>
        <Ionicons
            // onPress={() => props.navigation.goBack()}
            style={styles.backarrowstyle}
            name="arrow-back"
            size={hp('3')}
            color="black"
          />
            <Text style={styles.HederText}>Commnets</Text>
        </View>
  )
}

export default HeaderComponent
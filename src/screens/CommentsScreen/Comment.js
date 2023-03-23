import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const Comment = () => {
  return (
    <View style={styles.mainContainer}>
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
    </View>
  )
}

export default Comment
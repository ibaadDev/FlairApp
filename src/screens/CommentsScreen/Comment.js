import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'

const Comment = () => {
  return (
    <View style={styles.mainContainer}>
        <HeaderComponent/>
        <View style={styles.roundImage}>
            {/* <View style={styles.roundImage}>
                <View styles={styles.roundImage}>

                </View>

            </View> */}
        </View>
    </View>
  )
}

export default Comment
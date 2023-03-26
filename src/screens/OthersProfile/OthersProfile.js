import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { styles } from './styles'
import { LoginInputComp } from '../../components/LoginInputComp/LoginInputComp'
import { color } from '../../config/color'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { ButtonThemeComp } from '../../components/ButtonThemeComp/ButtonThemeComp'
import { errorMessage } from '../../config/NotificationMessage'
import { errorHandler } from '../../config/helperFunction'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'

const OthersProfile =()=>{
    const data = [{},{},{},{},{},{},{},{}]
return(
    <View style={styles.mainContainer}>
    <HeaderComponent
    back={true}
    name={'My Profile'}
    backpress={()=> navigation.goBack()}
    />
    <View style={styles.upperrow}>
    <TouchableOpacity
    //   onPress={onPress}
      style={{
        backgroundColor: 'white',
        ...styles.container,
        borderColor:  'grey',
      }}>
      <Text style={{...styles.textContainer, color: 'grey'}}>109 Post</Text>
    </TouchableOpacity>
    <TouchableOpacity
    //   onPress={onPress}
      style={{
        backgroundColor: 'white',
        ...styles.followingcontainer,
        borderColor:  'grey',
      }}>
      <Text style={{...styles.textContainer, color: 'grey'}}>35.2k Followers</Text>
    </TouchableOpacity>
    <TouchableOpacity
    //   onPress={onPress}
      style={{
        backgroundColor: 'white',
        ...styles.followingcontainer,
        borderColor:  'grey',
      }}>
      <Text style={{...styles.textContainer, color: 'grey'}}>12.3k Following</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.midView}>
    <Image
    source={require('../../images/image1.jpg')}
    style={styles.imagestyles}
    />
    <Text style={styles.username}>Chriss Morris</Text>
    <Text style={styles.secondText}>iamchrismorris</Text>
    <Text style={styles.ThirdText}>The purpose of art is washing the dust of daily life off our souls.</Text>
    <View style={styles.editprofilerow}>
    <TouchableOpacity
      onPress={()=>{
        navigation.navigate('EditProfile')
      }}
      style={{
        backgroundColor: 'white',
        ...styles.editprofileconatiner,
        borderColor:  'grey',
      }}>
      <Text style={{...styles.textContainer, color: 'grey'}}>Followed</Text>
    </TouchableOpacity>
    </View>
    <FlatList
     data={data}
     numColumns={3}
     scrollEnabled={true}
     renderItem={({ item }) => {
       return(
        <View style={{height:hp('14'),marginTop:hp('4'),marginHorizontal:wp('3')}}>
        <Image
        source={require('../../images/postman.jpg')}
        style={{height:hp('14'),width:wp('27'),borderRadius:20}}
        />
         </View>
        )}}
        
       />
    </View>
    </View>
)
}
export default OthersProfile;

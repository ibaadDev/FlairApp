import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
const Post = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
    <HeaderComponent
    back={true}
    backpress={()=> navigation.goBack()}
    name={'Post'}/>

    <View >
        <Image
        source={require('../../images/postman.jpg')}
        resizeMode={'cover'}
        style={styles.imagestyle}
        />
        <View style={styles.commintsView}>
            <TouchableOpacity style={{marginHorizontal:wp('3'),flexDirection:'row'}}>
                <Image
                source={require('../../images/Union1.png')}
                style={{marginRight:wp('2')}}
                />
                <Text style={{marginLeft:wp('2')}}>11.3k</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal:wp('3'),flexDirection:'row'}}>
                <Image
                source={require('../../images/comment-o.png')}
                style={{marginRight:wp('2')}}
                />
                <Text style={{marginLeft:wp('2')}}>21.4k</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal:wp('3'),flexDirection:'row'}}>
                <Image
                source={require('../../images/retweet1.png')}
                style={{marginRight:wp('2')}}
                />
                <Text style={{marginLeft:wp('2')}}>11k</Text>
            </TouchableOpacity>
        </View>
        <Text style={styles.innerView}>
         <Text style={styles.MainName}>Jeffmusic  </Text>
         <Text style={styles.secondText}>Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor lora ad.</Text>
         </Text> 
         <TouchableOpacity style={styles.viewall}>
         <Text >View all comments</Text>
         </TouchableOpacity>
    </View>
    </View>
  )
}

export default Post
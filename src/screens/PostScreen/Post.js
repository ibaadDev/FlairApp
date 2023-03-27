import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { styles } from './styles'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import Video from 'react-native-video'
  

const Post = ({route,navigation}) => {
  const { item } = route.params;
  return (
    <SafeAreaView style={styles.mainContainer}>
    <HeaderComponent
    back={true}
    backpress={()=> navigation.goBack()}
    name={'Post'}/>
   { console.log("sadaskjdhkjs",item.type)}
    <View >
      {item.type=="image"?
         <Image
        source={item.type=="image"?{uri:item.file_url}:require('../../images/postman.jpg')}
        resizeMode={'cover'}
        style={styles.imagestyle}
        />
      :item.type == "text"?
      <View style={styles.Textstyle}>
       <Text style={{alignSelf:'center',color:'black',fontSize:hp('3')}}>{item.description}</Text>
       </View>
       :
       <Video  
            source={{uri:item.file_url}}            
            paused={false}                  
            style={styles.imagestyle}  
            repeat={false}                   
        />

      }
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
    </SafeAreaView>
  )
}

export default Post
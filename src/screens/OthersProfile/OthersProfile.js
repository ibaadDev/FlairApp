import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect, useState} from 'react'
import { styles } from './styles'
import { LoginInputComp } from '../../components/LoginInputComp/LoginInputComp'
import { color, colorTutor_ } from '../../config/color'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { ButtonThemeComp } from '../../components/ButtonThemeComp/ButtonThemeComp'
import { errorMessage } from '../../config/NotificationMessage'
import { errorHandler, Following, removeFollowing } from '../../config/helperFunction'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import axios from 'react-native-axios';
import {SkypeIndicator}from 'react-native-indicators';
import {useSelector,useDispatch} from 'react-redux';
import CircleButton from '../../components/CircleButton'

const OthersProfile =({route,navigation})=>{
    const {userData, token} = useSelector(state =>state.userData);
    const { item} = route.params;
    console.log(item);
    const data = [{},{},{},{},{},{},{},{}]
    const [profiledata,setProfileData] = useState([])
    let id = ''
const getOtherProfileinfo = ()=>{
    let url = 'https://flairapp.clickysoft.net/api/authorized/posts'+('?page='+1)
    if(item.user != undefined){
        url = url + "&user_id=" + item.user.id;
    }else{
        url = url+ "&user_id=" + item.id;
    }
    axios.get(url,
    {
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
        console.log(res.data.data[0])
        setProfileData(res.data.data)
    //   post.current = res.data.data[0]
    //   setIsLoading(false)
    }).catch((err)=>{
        console.log("asdsa",err)
        errorMessage(errorHandler(err))
    })
}
const Follower = (item)=>{
  if(item.user != undefined){
    id= item.user.id
  }
  else{
    id = item.id
  }
    Following(id,token)
    getOtherProfileinfo();
  }
  const RemoveFollower=(item)=>{
    
    if(item.user != undefined){
      id= item.user.id
    }
    else{
      id = item.id
    }
    removeFollowing(id,token)
    getOtherProfileinfo();
  }
useEffect(()=>{
    getOtherProfileinfo();
},[])

return(
    
    <SafeAreaView style={styles.mainContainer}>
    <HeaderComponent
    back={true}
    name={'User Name'}
    backpress={()=> navigation.goBack()}
    />
    {profiledata.length>0?
    <>
    <View style={styles.upperrow}>
    <TouchableOpacity
    //   onPress={onPress}
      style={{
        backgroundColor: 'white',
        ...styles.container,
        borderColor:  'grey',
      }}>
      <Text style={{...styles.textContainer, color: 'grey'}}>{`${item.user != undefined?item?.user?.post_count:item?.post_count} Post`}</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=>{navigation.navigate('Followers',{item})}}
      style={{
        backgroundColor: 'white',
        ...styles.followingcontainer,
        borderColor:  'grey',
      }}>
      <Text style={{...styles.textContainer, color: 'grey'}}>{`${item.user != undefined?item?.user?.followers_count:item?.followers_count}  Followers`}</Text>
    </TouchableOpacity>
    <TouchableOpacity
    onPress={()=>{navigation.navigate('Following',{item})}}
      style={{
        backgroundColor: 'white',
        ...styles.followingcontainer,
        borderColor:  'grey',
      }}>
      <Text style={{...styles.textContainer, color: 'grey'}}>{`${item.user != undefined?item?.user?.following_count:item?.following_count} Following`}</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.midView}>
    <Image
         
        source={item.user != undefined?item.user.profile_image ==null? require('../../images/default_avatar.png'):{uri:item.user.profile_image}:
        item.profile_image ==null? require('../../images/default_avatar.png'):{uri:item.profile_image}}
    
    
    style={styles.imagestyles}
    />
    <Text style={styles.username}>{item.user != undefined?item.user.user_name:item.user_name}</Text>
    <Text style={styles.secondText}>{item.user != undefined?item.user.name:item.name}</Text>
    {/* <Text style={styles.ThirdText}>The purpose of art is washing the dust of daily life off our souls.</Text> */}
    <View style={styles.editprofilerow}>
    <CircleButton
          isBool={ item.user != undefined?item.user.is_following_by_me == 0?true:false:item.is_following_by_me == 0?true:false}
          texColor={item.user != undefined?item.user.is_following_by_me == 0 ? 'white' : 'grey':item.is_following_by_me == 0 ? 'white' : 'grey'}
          bg={item.user != undefined?item.user.is_following_by_me == 0 ? color.primaryColor : 'white':item.is_following_by_me == 0 ? color.primaryColor : 'white'}
          onPress={() => {item.user != undefined?item.user.is_following_by_me == 0? Follower(item):RemoveFollower(item):item.is_following_by_me == 0? Follower(item):RemoveFollower(item)}}
          text={item.user != undefined?item.user.is_following_by_me == 0 ?'Follow' : 'UnFollow':item.is_following_by_me == 0 ?'Follow' : 'UnFollow'}
        />
    </View>
    <FlatList
     data={profiledata}
     numColumns={3}
     scrollEnabled={true}
     renderItem={({ item }) => {
       return(
        <TouchableOpacity style={{height:hp('14'),marginTop:hp('4'),marginHorizontal:wp('3')}} 
        onPress={()=>{navigation.navigate('Post',{item})}}>
        <Image
        source={item.thumbnail_url!=null?{uri:item.thumbnail_url}:{uri:item.file_url}}
        style={{height:hp('14'),width:wp('27'),borderRadius:20}}
        />
         </TouchableOpacity>
        )}}
        
       />
    </View>
    </>
    :
    <SkypeIndicator color={color.black}/>
  }
    </SafeAreaView>
)
}
export default OthersProfile;

import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import CircleButton from '../../components/CircleButton';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { removeFollowing } from '../../config/helperFunction';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'react-native-axios';
import {SkypeIndicator}from 'react-native-indicators';
const Following = ({route,navigation}) => {
  const {userData, token} = useSelector(state =>state.userData);
  const data=[{isBool:true},{isBool:false},{isBool:false},{isBool:true},{isBool:true},{isBool:false}]
  const[FollowingData,setFollowingData] = useState([])
    const { item } = route.params;
    let id = ''
    const getFollowinginfo=()=>{
      let url = 'https://flairapp.clickysoft.net/api/authorized/follow'
    if(item.user!= undefined){
        url = url + "?user_id=" + item.user.id;
    }else{
      url = url + "?user_id=" + item.id;
    }
      axios.get(url,{
        headers:{Authorization: `Bearer ${token}`}
      }).then((res)=>{
        setFollowingData(res.data.data)
      }).catch((err)=>{
        console.log(err)
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
      getFollowinginfo();
    }
    const RemoveFollower=(item)=>{
      if(item.user != undefined){
        id= item.user.id
      }
      else{
        id = item.id
      }
      removeFollowing(id,token)
      // getFollowinginfo();
    }
    useEffect(()=>{
      getFollowinginfo();
    },[])
  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderComponent
      back={true}
      name={'Following'}
      backpress={()=> navigation.goBack()}
      />
    <FlatList
    data={FollowingData}
    contentContainerStyle={{marginBottom:hp('10')}}
    renderItem={({ item }) => {
      return(
        <View style={styles.container}>
    <View style={styles.innerContainer}>
    <TouchableOpacity
      onPress={()=>{navigation.navigate('OthersProfile',{item})}}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={item.user != undefined?item.user.profile_image ==null? require('../../images/default_avatar.png'):{uri:item.user.profile_image}:
        item.profile_image ==null? require('../../images/default_avatar.png'):{uri:item.profile_image}}
      />
      </TouchableOpacity>
      <View>
      <Text style={styles.text1}>{item.user != undefined?item.user.user_name:item.user_name}</Text>
        <Text style={styles.text2}>{item.user != undefined?item.user.name:item.name}</Text>
        <View style={styles.text3Container}>
          {/* <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text3}>
            music always put me in goog mood when nobody see me
          </Text> */}
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: hp('2'),
        }}>
        {
        item.user !=null?
        item.user.id!==userData.id?
       <CircleButton
       isBool={item.isBool}
       texColor={item.isBool ? 'white' : 'white'}
       bg={item.isBool ? '#561CE0' : '#561CE0'}
       onPress={() => {Follower(item)}}
       text={item.isBool ? 'Follow' : 'Follow'}
     />
        :
        null
        :
        <CircleButton
          isBool={ item.user != undefined?item.user.is_following_by_me == 0?true:false:item.is_following_by_me == 0?true:false}
          texColor={item.user != undefined?item.user.is_following_by_me == 0 ? 'white' : 'grey':item.is_following_by_me == 0 ? 'white' : 'grey'}
          bg={item.user != undefined?item.user.is_following_by_me == 0 ? color.primaryColor : 'white':item.is_following_by_me == 0 ? color.primaryColor : 'white'}
          onPress={() => {Follower(item)}}
          text={item.user != undefined?item.user.is_following_by_me == 0 ?'Follow' : 'Follow':item.is_following_by_me == 0 ?'Follow' : 'Follow'}
        />

      }
      </View>
    </View>
    <View style={styles.divider}>

    </View>
    <View style={styles.bottomContainer}>
      <Text style={styles.bottomText}>{`${item.user.post_count} Posts`}</Text>
      <View
        style={{borderLeftWidth: 1, height: '100%', borderColor: 'grey'}}
      />

      <Text style={styles.bottomText}>{`${item.user.followers_count}Followers`}</Text>
      <View
        style={{borderLeftWidth: 1, height: '100%', borderColor: 'grey'}}
      />
      <Text style={styles.bottomText}>{`${item.user.following_count} Following`}</Text>
    </View>
    </View>
      )
    }}
    />
    </SafeAreaView>
  )
}

export default Following
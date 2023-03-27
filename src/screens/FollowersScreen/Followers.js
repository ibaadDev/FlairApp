import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import CircleButton from '../../components/CircleButton';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import {useSelector,useDispatch} from 'react-redux';
import axios from 'react-native-axios';
import {SkypeIndicator}from 'react-native-indicators';
import { Following, removeFollowing } from '../../config/helperFunction';
import { color } from '../../config/color';
const Followers = ({route,navigation}) => {
  const data=[{isBool:true},{isBool:false},{isBool:false},{isBool:true},{isBool:true},{isBool:false}]
    // const [isBool, setBool] = useState(false);
    const[FollowData,setFollowData] = useState([])
    const {userData, token} = useSelector(state =>state.userData);
    const { item } = route.params;
    let  id=''
    const getFollowinfo=()=>{
      let url ='https://flairapp.clickysoft.net/api/authorized/follower/list'
      if(item.user != undefined  ){
        url = url + "?user_id=" + item.user.id;
    }else{
      url = url + "?user_id=" + item.id;
    }
      axios.get(url,{
        headers:{Authorization: `Bearer ${token}`}
      }).then((res)=>{
        setFollowData(res.data.data)
        console.log("========>",res.data.data)
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
      getFollowinfo();
    }
    const RemoveFollower=(item)=>{
      if(item.user != undefined){
        id= item.user.id
      }
      else{
        id = item.id
      }
      removeFollowing(id,token)
      getFollowinfo();
    }


    useEffect(()=>{
      getFollowinfo();
    },[]);


  return (
    <SafeAreaView style={styles.mainContainer}>
      <HeaderComponent
      back={true}
      name={'Followers'}
      backpress={()=> navigation.goBack()}
      />
    <FlatList
    data={FollowData}
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
          
          {item.user != undefined?
          item.user.id!==userData.id?
       <CircleButton
          isBool={item.user.is_following_by_me == 0?true:false}
          texColor={item.user.is_following_by_me == 0 ? 'white' : 'grey'}
          bg={item.user.is_following_by_me == 0 ? color.primaryColor : 'white'}
          onPress={() => {item.user.is_following_by_me == 0? Follower(item):RemoveFollower(item)}}
          text={item.user.is_following_by_me == 0 ?'Follow' : 'Following'}
        />
        :
        null
        :
        <CircleButton
          isBool={ item.user != undefined?item.user.is_following_by_me == 0?true:false:item.is_following_by_me == 0?true:false}
          texColor={item.user != undefined?item.user.is_following_by_me == 0 ? 'white' : 'grey':item.is_following_by_me == 0 ? 'white' : 'grey'}
          bg={item.user != undefined?item.user.is_following_by_me == 0 ? color.primaryColor : 'white':item.is_following_by_me == 0 ? color.primaryColor : 'white'}
          onPress={() => {item.user != undefined?item.user.is_following_by_me == 0? Follower(item):RemoveFollower(item):item.is_following_by_me == 0? Follower(item):RemoveFollower(item)}}
          text={item.user != undefined?item.user.is_following_by_me == 0 ?'Follow' : 'UnFollow':item.is_following_by_me == 0 ?'Follow' : 'UnFollow'}
        />
      }
      </View>
    </View>
    <View style={styles.divider}>

    </View>
    <View style={styles.bottomContainer}>
    <Text style={styles.bottomText}>{`${item.user.post_count}Posts`}</Text>
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

export default Followers
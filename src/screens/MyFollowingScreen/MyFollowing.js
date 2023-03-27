import { View, Text, Image, FlatList, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import CircleButton from '../../components/CircleButton';
import axios from 'react-native-axios';
import {useSelector,useDispatch} from 'react-redux';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { Following, removeFollowing } from '../../config/helperFunction';
import {SkypeIndicator}from 'react-native-indicators';
import { color } from '../../config/color';
const MyFollowing = ({navigation}) => {
  const data=[{isBool:true},{isBool:false},{isBool:false},{isBool:true},{isBool:true},{isBool:false}]
    const[FollowingData,setFollowingData] = useState([])
    const {userData, token} = useSelector(state =>state.userData);
    const getFollowinginfo=()=>{
      axios.get('https://flairapp.clickysoft.net/api/authorized/follow',{
        headers:{Authorization: `Bearer ${token}`}
      }).then((res)=>{
        setFollowingData(res.data.data)
        console.log(res.data.data[0])
      }).catch((err)=>{
        console.log(err)
      })
    }
    const Follower = (item)=>{
      Following(item.user.id,token)
      // getFollowinfo();
    }
    const RemoveFollower=(item)=>{
      removeFollowing(item.user.id,token)
      getFollowinginfo();
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
      {FollowingData.length>0?


     
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
        source={item.user.profile_image == null ?require('../../images/default_avatar.png'):{uri:item.user.profile_image}}/>
      </TouchableOpacity>
      <View>
        <Text style={styles.text1}>{item.user.name}</Text>
        <View style={styles.text3Container}>
        <Text style={styles.text2}>{item.user.user_name}</Text>
        <Text style={styles.folowtxt}>Follow</Text>
        </View>
        <View style={styles.text3Container} >
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
        <CircleButton
        //   isBool={i}
          texColor={item.isBool ? 'grey' : 'grey'}
          bg={item.isBool ? 'white' : 'white'}
          onPress={() => {RemoveFollower(item)}}
          text={item.isBool ? 'Remove' : 'Remove'}
        />
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
    :
    <SkypeIndicator color={color.black}/>
  }
    </SafeAreaView>
  )
}

export default MyFollowing
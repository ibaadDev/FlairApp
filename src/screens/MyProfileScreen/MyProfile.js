import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useEffect, useRef, useState} from 'react'
import { styles } from './styles'
import { LoginInputComp } from '../../components/LoginInputComp/LoginInputComp'
import { color } from '../../config/color'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { ButtonThemeComp } from '../../components/ButtonThemeComp/ButtonThemeComp'
import { errorMessage, successMessage } from '../../config/NotificationMessage'
import { errorHandler } from '../../config/helperFunction'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import {SkypeIndicator}from 'react-native-indicators';
import axios from 'react-native-axios';
import {useSelector,useDispatch} from 'react-redux';
import types from '../../Redux/types'
const MyProfile = ({navigation}) => {
    const {userData, token} = useSelector(state =>state.userData);
    const [MyPost,setMyPost] = useState([])
    const [IsLoading,setIsLoading] = useState(false);
    const [Page,setPage] =useState(1);
   const post = useRef(new Array());
    const data = [{},{},{},{},{},{},{},{}]
    const dispatch = useDispatch();
    const Logout = () =>{
        axios.post('https://flairapp.clickysoft.net/api/authorized/logout', userData,
        {
            headers: { Authorization: `Bearer ${token}` }
          })
          .then(function (res) {
            // setIsloading(false);
            console.log(res)
          
            if(res.data.error) {
              errorMessage(res.data.error)
            }
            else{
              successMessage(res.data.message)
              
            }
            dispatch({
              type: types.LogoutType,
            });
            navigation.navigate('Login')

          })
          .catch(function (err) {
            // setIsloading(false);
            errorMessage(errorHandler(err));
          });
    }


    const MyPostList = () =>{
        setIsLoading(true)
        let url = 'https://flairapp.clickysoft.net/api/authorized/posts'+('?page='+Page)
        if(userData.id){
            url = url + "&user_id=" + userData.id;
        }
        axios.get(url,
        {
          headers: { Authorization: `Bearer ${token}` }
        }).then((res) => {
            setMyPost(res.data.data);
        //   console.log( "sdkashd",MyPost[0])
          post.current = res.data.data[0]
          setIsLoading(false)
        //   setPage(Page + 1)
        }).catch((err)=>{
            console.log("asdsa",err)
            errorMessage(errorHandler(err))
        })
    }
    useEffect(()=>{
        MyPostList();
        console.log(userData)
      },[])
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
      <Text style={{...styles.textContainer, color: 'grey'}}>{`${userData.post_count} Post`}</Text>
    </TouchableOpacity>
    <TouchableOpacity
    //   onPress={onPress}
      style={{
        backgroundColor: 'white',
        ...styles.followingcontainer,
        borderColor:  'grey',
      }}>
      <Text style={{...styles.textContainer, color: 'grey'}}>{`${userData.followers_count} Follower`}</Text>
    </TouchableOpacity>
    <TouchableOpacity
    //   onPress={onPress}
      style={{
        backgroundColor: 'white',
        ...styles.followingcontainer,
        borderColor:  'grey',
      }}>
      <Text style={{...styles.textContainer, color: 'grey'}}>{`${userData.following_count} Following`}</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.midView}>
    <Image
    source={userData.profile_image ==null? require('../../images/default_avatar.png'):{uri:userData.profile_image}}
    style={styles.imagestyles}
    />
    <Text style={styles.username}>{userData.name}</Text>
    <Text style={styles.secondText}>{userData.user_name}</Text>
    {/* <Text style={styles.ThirdText}>The purpose of art is washing the dust of daily life off our souls.</Text> */}
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
      <Text style={{...styles.textContainer, color: 'grey'}}>Edit Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={()=>Logout()}
      style={{
        backgroundColor: 'grey',
        ...styles.editprofileconatiner,
        borderColor:  'grey',
      }}>
      <Text style={{...styles.textContainer, color: 'white'}}>Logout</Text>
    </TouchableOpacity>
    </View>
    <FlatList
     data={MyPost}
     numColumns={3}
     scrollEnabled={true}
     renderItem={({ item }) => {
       return(
        <View style={{height:hp('14'),marginTop:hp('4'),marginHorizontal:wp('3')}}>
        <Image
        source={item.thumbnail_url==null?require('../../images/default_avatar.png'):{uri:item.thumbnail_url}}
        style={{height:hp('14'),width:wp('27'),borderRadius:20}}
        />
         </View>
        )}}
        
       />
    </View>
    </View>
)
}
export default MyProfile;
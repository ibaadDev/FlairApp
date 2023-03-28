import { View, Text, Image, FlatList, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import { CircleImageComp } from '../../components/CircleImageComp/CircleImageComp'
import { color } from '../../config/color'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import CircleButton from '../../components/CircleButton'
import axios from 'react-native-axios';
import {useSelector,useDispatch} from 'react-redux';
import { errorMessage, successMessage } from '../../config/NotificationMessage'
import Video from 'react-native-video'
import { Following } from '../../config/helperFunction'

const Spotlight = ({navigation}) => {
    const data=[{},{},{}]
    const { token,userData } = useSelector(state => state.userData);
    const [page, setpage] = useState(1);
    const [feedData, setFeedData] = useState({});
    const [hasMore, setHasMore] = useState(true);
    const getFeedList = () => {
      if(hasMore){
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        axios.get("https://flairapp.clickysoft.net/api/authorized/posts" + (feedData.length ? "?spotlight=" + page : ""),
            config
        ).then((res) => {
            if (res.data.error) {
              errorMessage(res.data.error);
            } else {
              if (!res.data.meta || page >= res.data.meta.last_page){
                setHasMore(false);
              }
              if (res.data.data) {
                if(feedData.length){
                  let newDataSet = [...feedData, ...res.data.data];
                  setFeedData(newDataSet);
                }else{
                  setFeedData(res.data.data);
                  console.log(res.data.data)
                }
                setpage(page+1);
              }
            }

            
        }).catch((err) => {
          console.log(err)
          errorMessage('Something went wrong');
        });
      }else{
        successMessage("No more data found.");
      }
    }
    const Follower = (item)=>{
      Following(item.user.id,token)
      getFollowinginfo();
    }
    useEffect(()=>{
      getFeedList(true);}
    ,[])
    return(
        <SafeAreaView style={styles.mainContainer}>
            <HeaderComponent
            text={true}
            name={'Spotlight'}
            />
             <FlatList
              data={feedData}
              contentContainerStyle={{marginBottom:hp('10')}}
              onEndReached={getFeedList}
              onEndReachedThreshold={0.5}
              renderItem={({ item }) => {
      return(

        <View style={styles.container}>
    <View style={styles.innerContainer}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={item.user.profile_image == null?require('../../images/image1.jpg'):{uri:item.user.profile_image}}
      />
      <View>
        <Text style={styles.text1}>{item?.user?.user_name}</Text>
        <Text style={styles.text2}>{item?.user?.name}</Text>
        {/* <Text style={styles.folowtxt}>Follow</Text>
        </View> */}
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
          {item.user.id!==userData.id?
        <CircleButton
          isBool={item.user.is_following_by_me == 0?true:false}
          texColor={ item.user.is_following_by_me == 0 ? 'white': 'grey' }
          bg={item.user.is_following_by_me == 0 ?  color.primaryColor :'white'}
          onPress={() => {}}
          text={item.user.is_following_by_me == 0 ?'Follow' : 'Following'}
        />
        :null}
      </View>
    </View>
    <View style={styles.divider}>

    </View>
    <View style={styles.bottomContainer}>
      <Text style={styles.bottomText}>{`${item?.user?.post_count} Posts`}</Text>
      <View
        style={{borderLeftWidth: 1, height: '100%', borderColor: 'grey'}}
      />

      <Text style={styles.bottomText}>{`${item?.user?.followers_count} Followers`}</Text>
      <View
        style={{borderLeftWidth: 1, height: '100%', borderColor: 'grey'}}
      />
      <Text style={styles.bottomText}>{`${item?.user?.following_count} Following`}</Text>
    </View>
    {item.type=="image"?
         <Image
        source={item.type=="image"?{uri:item.file_url}:require('../../images/postman.jpg')}
        resizeMode={'cover'}
        style={styles.imagestyle}
        />
      :item.type == "text"?
      <View style={styles.imagestyle}>
       <Text style={{alignSelf:'center',color:'black',fontSize:hp('3')}}>{item.description}</Text>
       </View>
       :
       <Video  
            source={{uri:item.file_url}}            
            paused={true}                  
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
    </View>

      )}}
      />
        
        </SafeAreaView>
    )
}
export default Spotlight
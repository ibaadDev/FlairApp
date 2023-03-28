import {  Image, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { styles } from './styles'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import { CircleImageComp } from '../../components/CircleImageComp/CircleImageComp'
import Entypo from 'react-native-vector-icons/Entypo';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import axios from 'react-native-axios';
import {useSelector,useDispatch} from 'react-redux';
import { errorMessage, successMessage } from '../../config/NotificationMessage'
import types from '../../Redux/types'
import Video from 'react-native-video'
import { errorHandler } from '../../config/helperFunction';
import {SkypeIndicator}from 'react-native-indicators';
import { color } from '../../config/color';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
  


const Feed = ({navigation}) => {

    const { token } = useSelector(state => state.userData);
    // const { feedData, feedPage } = useSelector(state => state.feedData);
    const dispatch = useDispatch();
    const [page, setpage] = useState(1);
    const [feedData, setFeedData] = useState({});
    const [hasMore, setHasMore] = useState(true);
    const[IsLoading , setIsLoading] = useState(false)

    const getFeedList = () => {
      
      if(hasMore){
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        setIsLoading(true)
        axios.get("https://flairapp.clickysoft.net/api/authorized/feed" + (feedData.length ? "?page=" + page : ""),
            config
        ).then((res) => {
            if (res.data.error) {
              errorMessage(res.data.error);
            } else {
              if (!res.data.meta || page >= res.data.meta.last_page){
                setHasMore(false);
              }
              if (res.data.data) {
                setIsLoading(false)
                if(feedData.length){
                  let newDataSet = [...feedData, ...res.data.data];
                  setFeedData(newDataSet);
                }else{
                  setIsLoading(false)
                  setFeedData(res.data.data);
                  console.log(res.data.data[0])
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

  
    const Upvoteaction = (postid)=>{
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      axios.post('https://flairapp.clickysoft.net/api/authorized/posts/upvote/toggle',
      {
        post_id:postid
      }
      ,config)
           .then(function (res) {
            // console.log(res)
          
            if(res.data.error) {
              errorMessage(res.data.error)
            }
            else{
              getFeedList(true);
              console.log(res.data);
              successMessage(res.data.message)
            }

          })
          .catch(function (err) {
            console.log("asdasd =========>",err)
            errorMessage(errorHandler(err));
          });
      
    }

  useEffect(() => {
    navigation.addListener('focus', () => {
      getFeedList(true);
    });
}, [navigation]);




const renderItem = ({item}) => {
    return (
      <>
      {/* <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
      </MenuOptions> */}
      <Menu>
      <MenuItem >Menu item 1</MenuItem>
      <MenuItem >Menu item 2</MenuItem>
      </Menu>
        <View style={styles.imagerow}>
        <View style={styles.imageView}>
          {
            item.user.profile_image !== null?
            <CircleImageComp
              image={{uri:item.user.profile_image}}
          />
            :
            <CircleImageComp
              image={require('../../images/Ellipse1.png')}
          />
          }
        
          <Text style={styles.NameTag}>{item.user.user_name}</Text>
    
        </View>
        <Entypo
          //   onPress={props?.eyeIconPress}
            name={'dots-three-vertical'}
            color={'black' }
            style={{
              marginLeft: 'auto',
              marginRight: wp('3'),
              paddingLeft: wp('2'),
            }}
            size={hp('3')}
          />
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
         {/* <Image
          source={require('../../images/postman.jpg')}
          resizeMode={'cover'}
          style={styles.imagestyle}
          /> */}
          <View style={styles.commintsView}>
              <TouchableOpacity style={{marginHorizontal:wp('3'),flexDirection:'row'}} onPress={()=>{Upvoteaction(item.id)}}>
                  {
                    item.upvoted?<Image
                    source={require('../../images/Union1.png')}
                    style={{marginRight:wp('2')}}
                    />:
                    <Image
                  source={require('../../images/Union-1.png')}
                  style={{marginRight:wp('2')}}
                  />
                  }
                  
                  <Text style={{marginLeft:wp('2')}}>{item?.user?.upvote_count}</Text>
                  
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal:wp('3'),flexDirection:'row'}} onPress={()=>{navigation.navigate('Comment',{item})}}>
                  <Image
                  source={require('../../images/comment-o.png')}
                  style={{marginRight:wp('2')}}
                  />
                  <Text style={{marginLeft:wp('2')}}>{item?.user?.comment_count}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal:wp('3'),flexDirection:'row'}}>
                  <Image
                  source={require('../../images/retweet1.png')}
                  style={{marginRight:wp('2')}}
                  />
                  <Text style={{marginLeft:wp('2')}}>{item.repost_count}</Text>
              </TouchableOpacity>
          </View>
          <Text style={styles.innerView}>
            
           <Text style={styles.MainName}>{item?.last_comment?.user.user_name}  </Text>
           <Text style={styles.secondText}>{item?.last_comment?.comment}</Text>
           </Text> 
           <TouchableOpacity style={styles.viewall}>
           <Text >View all comments</Text>
           </TouchableOpacity>
           </>
    )
};


  return (
    <View style={styles.mainContainer}>
        <HeaderComponent 
        name={'Feed'}
        text={true}/>
       {IsLoading?
      <SkypeIndicator color={color.black}
      style={{paddingBottom:hp(8)}}
      />:
         <FlatList
         data={feedData}
         renderItem={renderItem}
         onEndReached={getFeedList}
         onEndReachedThreshold={0.5}
       />
      }
         
    </View>
  )
}

export default Feed
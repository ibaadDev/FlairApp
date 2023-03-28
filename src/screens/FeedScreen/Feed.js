import {  Image, Text, TouchableOpacity, View, FlatList,Alert } from 'react-native'
import React, {useState, useEffect} from 'react'
import { styles } from './styles'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import { CircleImageComp } from '../../components/CircleImageComp/CircleImageComp'
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
 import Entypo from 'react-native-vector-icons/Entypo';
import {   Menu, MenuOptions,  MenuOption, MenuTrigger, MenuProvider  } from 'react-native-popup-menu';



const Feed = ({navigation}) => {

    const { token,userData } = useSelector(state => state.userData);
    const dispatch = useDispatch();
    const [page, setpage] = useState(1);
    const [feedData, setFeedData] = useState({});
    const [hasMore, setHasMore] = useState(true);
    const[IsLoading , setIsLoading] = useState(false)
const [isbool,setisbool] = useState(false)
const handlebool =()=>{
  console.log("hello");
  setisbool(!isbool);
  return isbool
}
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

    const Icon = ()=>{
      return(
        <>
        <View style={{backgroundColor:'black',height:hp('2'),width:wp('4')}}></View>
        <Entypo
        onPress={onPress}
        name={'dots-three-vertical'}
        color={'black' }
        size={hp('3')}
      />
      </>
      )
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
        <View style={styles.imagerow} key={item.id}>
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
        
          <Text style={styles.NameTag}>{item.user.name}</Text>
    
        </View>
        <MenuProvider style={{flex:1}} >
        <View style={{zIndex:999}}>
        <Menu onSelect={value => {console.log(value)}}>
      <MenuTrigger>
      <Entypo
        // onPress={onPress}
        name={'dots-three-vertical'}
        color={'black' }
        size={hp('3')}
        style={{
          marginLeft: 'auto',
          marginRight: wp('3'),
          paddingLeft: wp('2'),
        }}
      />
      </MenuTrigger>
      <MenuOptions
      customStyles={{optionWrapper: { padding: 5}}}
      >
        {item.user.id == userData.id
        ?
        <>
        <MenuOption value="Delete" text="Delete" />
        <MenuOption value="Share" text="Share" />
        <MenuOption  text= 'Sign Out'/>
        </>
        :
        <>
        <MenuOption value="Unfollow" text="Unfollow" />
        <MenuOption value="ReportAbuse" text="ReportAbuse" />
        <MenuOption value="Share" text="Share" />
        </>
      }
    </MenuOptions>
  </Menu>
  </View>
                </MenuProvider>
                
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
           <TouchableOpacity style={styles.viewall} onPress={()=>{navigation.navigate('Comment',{item})}}>
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
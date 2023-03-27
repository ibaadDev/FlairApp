import { View, Text, Image, FlatList, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import CircleButton from '../../components/CircleButton';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import { color } from '../../config/color';
import axios from 'react-native-axios';
import {SkypeIndicator}from 'react-native-indicators';
import {useSelector,useDispatch} from 'react-redux';
import types from '../../Redux/types';
import { errorMessage, successMessage } from '../../config/NotificationMessage';
import { Following, removeFollowing } from '../../config/helperFunction';

const Tranding = ({navigation}) => {
  const dispatch = useDispatch()
    const {userData, token} = useSelector(state =>state.userData);
    const [TrandingData,setTrandingData] = useState([])
  //  const TrandingData=useRef(new Array())
    const [LastPage,setLastPage] =useState(0)
    const [IsLoading,setIsLoading] = useState(false);
    const [page, setpage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [search, setSearch] = useState('');
    const [categoryFilterData, setCategoryFilterData] = useState('');


    const FetchtrandingList =() =>{
      
      if(hasMore){
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        setIsLoading(true)
        axios.get("https://flairapp.clickysoft.net/api/authorized/trending/user" + (TrandingData.length ? "?page=" + page : ""),
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
                console.log(res.data.data[0])
                if(TrandingData.length){
                  let newDataSet = [...TrandingData, ...res.data.data];
                  setTrandingData(newDataSet)
                }else{
                  setIsLoading(false)
                  setTrandingData(res.data.data)
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
        Following(item.id,token)
        FetchtrandingList();
      }
      const RemoveFollower=(item)=>{
        removeFollowing(item.id,token)
        FetchtrandingList()
      }
      function searchFun(e) {
        var text = e;
        if (text) {
          // Inserted text is not blank
          // Filter the masterDataSource and update FilteredDataSource
          const newData = TrandingData.filter(function (item) {
            // Applying filter for the inserted text in search bar
            const itemData = item.name
              ? item.name.toUpperCase()
              : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setCategoryFilterData(newData);
          setSearch(text);
        } else {
          setCategoryFilterData(TrandingData);
          setSearch(text);
        }
      }
useEffect(()=>{
  navigation.addListener('focus', () => {
    FetchtrandingList();
  });
  },[navigation]);

return(
    <SafeAreaView style={styles.mainContainer}>
      <HeaderComponent
      name={'Tranding'}
      text={true}
      />
      <View style={styles.searchbar}>
        <Image
        source={require('../../images/Iconsearch.png')}
        />
        <TextInput
        placeholder='Search'
        placeholderTextColor={color.placeholdercolor}
        onChangeText={e => searchFun(e)}
        value={search}
        style={styles.placeholderstyle}
        />
      </View>
      {IsLoading?
      <SkypeIndicator color={color.black}
      style={{paddingBottom:hp(8)}}
      />:
      <>
    <FlatList
    data={categoryFilterData || TrandingData}
    onEndReachedThreshold={0.1}
    onEndReached={FetchtrandingList}
    contentContainerStyle={{paddingBottom:hp('1')}}
    renderItem={({ item }) => {
      return(
        <TouchableOpacity style={styles.container}
        onPress={()=>navigation.navigate('OthersProfile',{item})}
        >
    <View style={styles.innerContainer}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={item.profile_image == null ?require('../../images/default_avatar.png'):{uri:item.profile_image}}
      />
      <View>
        <Text style={styles.text1}>{item.user_name}</Text>
        <Text style={styles.text2}>{item.name}</Text>
        <View style={styles.text3Container}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text3}>
            {item.bio}
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: hp('2'),
        }}>
           <CircleButton
          isBool={item.is_following_by_me == 0?true:false}
          texColor={item.is_following_by_me == 0 ? 'white' : 'grey'}
          bg={item.is_following_by_me == 0 ? color.primaryColor : 'white'}
          onPress={() => {item.is_following_by_me == 0? Follower(item):RemoveFollower(item)}}
          text={item.is_following_by_me == 0 ?'Follow' : 'Unfollow'}
        />
      </View>
    </View>
    <View style={styles.divider}>

    </View>
    <View style={styles.bottomContainer}>
      <Text style={styles.bottomText}>109 Posts</Text>
      <View
        style={{borderLeftWidth: 1, height: '100%', borderColor: 'grey'}}
      />

      <Text style={styles.bottomText}>109 Followers</Text>
      <View
        style={{borderLeftWidth: 1, height: '100%', borderColor: 'grey'}}
      />
      <Text style={styles.bottomText}>109 Following</Text>
    </View>
    </TouchableOpacity>
      )
    }}
    />
    </>
    
  }
    </SafeAreaView>
)
}
export default Tranding
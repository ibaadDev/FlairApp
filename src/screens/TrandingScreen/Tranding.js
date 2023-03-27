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

const Tranding = ({navigation}) => {
  const dispatch = useDispatch()
    const {userData, token} = useSelector(state =>state.userData);
    // const [TrandingData,setTrandingData] = useState([])
   const TrandingData=useRef(new Array())
    const [LastPage,setLastPage] =useState(0)
    const [IsLoading,setIsLoading] = useState(false);
    const [Page,setPage] =useState(1);


    const FetchtrandingList =() =>{
      setIsLoading(true);
      axios.get('https://flairapp.clickysoft.net/api/authorized/trending/user'+('?page='+Page),
      {
        headers: { Authorization: `Bearer ${token}` }
      }).then((res) => {
        // setPage(Page + 1); 
        
        // console.log("agaya bsdka =================>",TrandingData.current)
        if(Page === 1){
          TrandingData.current = res.data.data
        }else{
          console.log(Page)
          TrandingData.current.push(res.data.data)
          
        console.log( "sdkashd =============>",TrandingData)
        }
       
        // setTrandingData([TrandingData, ...res.data.data])
        // setLastPage(res.data.meta.Lastpage)
        if(res.data.meta.Lastpage>Page) setPage(Page + 1) 
        setIsLoading(false)
        
        // dispatch({
        //   type: types.Tranding,
        //   payload: JSON.stringify(res.data),
        // });

      }).catch((err)=>{
        console.log("asdsa",err)
      })
      
    }
useEffect(()=>{
  FetchtrandingList();
},[]);

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
        // value=''
        // onChangeText={}
        style={styles.placeholderstyle}
        />
      </View>
    <FlatList
    data={TrandingData.current}
    onEndReachedThreshold={0.1}
    onEndReached={FetchtrandingList}
    contentContainerStyle={{marginBottom:hp('10')}}
    renderItem={({ item }) => {
      return(
        <TouchableOpacity style={styles.container}
        onPress={()=>navigation.navigate('OthersProfile')}
        >
    <View style={styles.innerContainer}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../images/image1.jpg')}
      />
      <View>
        <Text style={styles.text1}>{item.name}</Text>
        <Text style={styles.text2}>robinmusician</Text>
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
          isBool={true}
          texColor={ 'white'}
          bg={ '#561CE0'}
          // onPress={() => setBool(prev => !prev)}
          text={ 'Follow'}
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
    </SafeAreaView>
)
}
export default Tranding
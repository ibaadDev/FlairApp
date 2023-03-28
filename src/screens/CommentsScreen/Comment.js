import { View, Text, Image, FlatList, TouchableOpacity, TextInput, SafeAreaView, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { styles } from './styles'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import { CircleImageComp } from '../../components/CircleImageComp/CircleImageComp'
import { color } from '../../config/color'
import axios from 'react-native-axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector,useDispatch} from 'react-redux';
import {SkypeIndicator}from 'react-native-indicators';
import KeyBoardWrapper from '../../components/Keyboardwraper/KeyBaordWrapper'
const Comment = ({route,navigation}) => {
  const { item } = route.params;
  const data = [{},{},{},{}]
  const inputElement = useRef();
  const { token } = useSelector(state => state.userData);
  const [Data,setData] = useState([])
  const[Isloading , setIsloading] = useState(false)
  const [commentData, setcommentData] = useState({
    comment: ''
  });
  const {comment} = commentData;
  const updateState = data => setcommentData(() => ({...commentData, ...data}));

  const getCommet = ()=>{
    setIsloading(true)
    let url = "https://flairapp.clickysoft.net/api/authorized/comment?post_id="
    if(item.id){
      url = url +item.id
    }  
    axios.get(url,{
      headers:{Authorization: `Bearer ${token}`}
    }).then((res)=>{
      setIsloading(false)
      console.log(res.data.data),
      setData(res.data.data)}
    ).catch((err)=>{
      console.log(err)
    })
  }


  const docomment = ()=>{
    setIsloading(true)
    let url = "https://flairapp.clickysoft.net/api/authorized/comment"
    axios.post(url,{
      comment:comment,
      post_id:item.id,
    },{
      headers:{Authorization: `Bearer ${token}`}
    }).then((res)=>{
      // console.log(res.)
      getCommet();
      updateState({comment: ''})
    }
    ).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getCommet();
  },[])

  
  return (
   
    <SafeAreaView style={styles.mainContainer}>
      
        <HeaderComponent
        back={true}
        backpress={()=> navigation.goBack()}
        name={'Commnets'}/>
       
        {Isloading 
        ?
        <SkypeIndicator color={color.black}
        style={{paddingBottom:hp(8)}}
        />
        :
        <>
        {
          Data[0]?.user != undefined?
          <>
        <View style={styles.upperView}>
          <CircleImageComp
          image={Data[0]?.user?.profile_image == null ?require('../../images/Ellipse1.png'):{uri:Data[0]?.user?.profile_image}}
          styles={styles.mainimage}
          />
          <Text style={styles.innerView}>
         <Text style={styles.MainName}>{`${Data[0]?.user?.name}  `}</Text>
         <Text style={styles.secondText}>{`${Data[0]?.comment}  `}</Text>
         </Text>  
         </View>
         <View style={styles.Divider}>
         </View>
         <FlatList
                    data={Data}
                    renderItem={({ item }) => {
                      return(
                       <View style={styles.otherView}>
                        <Image
                        source={item.user.profile_image == null ?require('../../images/Ellipse1-1.png'):{uri:item.user.profile_image}}
                         styles={styles.Secondimage} 
                         />
                         <View style={styles.SecondinnerView}>
                          <Text style={styles.innerView}>
                        <Text style={styles.secondName}>{`${item.user.name}   `}</Text>
                        <Text style={styles.secondNameText}>{item.comment}</Text>
                        </Text>  
                        <Text style={styles.time}>
                         {item.comment_at}
                        </Text>
                         </View>
                        </View> )}}
        />
        </>
        :null
        }
        </>
      }
       <KeyboardAvoidingView behavior='position'>
        <View style={styles.bottomBar}>
          <View style={styles.bottomViewInsider}>
            <TextInput
            ref={inputElement}
            placeholderTextColor={color.greyTextcolor}
            placeholder={'Type your comments here'}
            value={comment}
            onChangeText={e => updateState({comment: e})}
            />
           <TouchableOpacity onPress={()=>{docomment()}}>
           <Text>Post</Text>
           </TouchableOpacity>
          </View>
          <View style={styles.BottomDivider}>
         </View>

        </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Comment
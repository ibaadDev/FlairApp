import React, { useRef, useState } from 'react'
import { Image, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CircleButton from '../../components/CircleButton';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import {launchImageLibrary} from 'react-native-image-picker';
import axios from 'react-native-axios';
import {useSelector,useDispatch} from 'react-redux';
import { styles } from './styles';

const CreatePost =({navigation})=>{
  const {userData, token} = useSelector(state =>state.userData);
    const ref = useRef(null);
    const [postData, setpostData] = useState({
      name:'',
      uri:'',
      type:''
    });
    const [isBool, setBool] = useState(true);
    const handleClick = () => {
        ref.current.focus();
      };
      const [posttextData, setposttextData] = useState({
        Descp:''
      });
      const {Descp} = posttextData;
      const updateState = data => setposttextData(() => ({...posttextData, ...data}));

      async function GetImgesPicker() {
        launchImageLibrary(
          {
            selectionLimit: 0,
            mediaType: 'photo',
            quality: 0.5,
            maxWidth: 300,
            maxHeight: 300,
          },
          res => {
            if (!res?.didCancel) {
              setpostData({
                name:res?.assets.filename,
                uri:res?.assets.uri,
                 type:res?.assets.type})
              console.log(res, 'resCopy');
            //   dispatch(AddImage(resCopy));
    
              // updateImage(res?.assets);
            }
          },
        );
      }
      async function GetVideoPicker() {
        launchImageLibrary(
          {
            selectionLimit: 0,
            mediaType: 'Video',
            storageOptions:{
                skipBackup:true,
                path:'images'
              }
              
          },
          res => {
            if (!res?.didCancel) {
              setpostData({
                name:res.assets.filename,
                uri:res.assets.uri,
                 type:res.assets.type})
            //   let resCopy = res?.assets?.map((item, index) => {
            //     return {...item, fileName: 'test' + index};
            //   });
              console.log(res, 'resCopy');
            //   dispatch(AddImage(resCopy));
    
              // updateImage(res?.assets);
            }
          },
        );
      }
      const PostData =()=>{
        const data_temp = new FormData()
        if (postData.type !="") {
          data_temp.append('type', postData.type.split("/")[0]);
          data_temp.append('post_file', postData[0]);
      } else {
          data_temp.append('type', 'text');
          data_temp.append('description', Descp);
      }
        axios.post('https://flairapp.clickysoft.net/api/authorized/posts', data_temp,
        {
            headers: { Authorization: `Bearer ${token}` ,
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
          }
          }).then((res)=>{
            navigation.navigate('Feed')
          }).catch((err)=>{
            console.log(err)
          })
      } 
    return(
        <SafeAreaView style={styles.mainContainer}>
        <HeaderComponent 
        name={'Create'}
        text={true}/>
        <View style={styles.upperContainer}>
            <TouchableOpacity  onPress={()=> navigation.goBack()}>
                <Image 
                source={require('../../images/Group103.png')}
                style={styles.crossimage}
                />
            </TouchableOpacity>
            
          <CircleButton
          isBool={isBool}
          texColor={isBool ? 'white' : 'white'}
          bg={isBool ? '#561CE0' : '#561CE0'}
          onPress={() => {setBool(prev => !prev),PostData()}}
          text={isBool ? 'Post' : 'Post'}
        />
        </View>
        <TextInput
        ref={ref}
        placeholder={`${'An interesting '}\n${'description...'}`}
        style={styles.textinput}
        value={Descp}
        onChangeText={(e)=>updateState({Descp: e})}
        />  
        <View style={styles.bottomView}>
           <TouchableOpacity style={styles.touchContent} onPress={()=>{GetImgesPicker()}}>
            <Image source={require('../../images/image.png')} 
            style={styles.mainimage}/>
            <Text style={styles.imagetext}>Image</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.touchContent} onPress={()=>{GetVideoPicker()}}>
            <Image source={require('../../images/videocam.png')} 
            style={styles.mainimage}/>
            <Text style={styles.imagetext}>Video</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.touchContent} onPress={()=>{handleClick()}}>
            <Image source={require('../../images/textanotation.png')} 
            style={styles.mainimage}/>
            <Text style={styles.imagetext}>Text</Text>
           </TouchableOpacity>
           
        </View>
        </SafeAreaView>
    )

}
export default CreatePost;
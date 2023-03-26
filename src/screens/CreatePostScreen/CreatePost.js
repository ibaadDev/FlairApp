import React, { useRef, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CircleButton from '../../components/CircleButton';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import {launchImageLibrary} from 'react-native-image-picker';
import { styles } from './styles';

const CreatePost =({navigation})=>{
    const ref = useRef(null);
    const [isBool, setBool] = useState(true);
    const handleClick = () => {
        ref.current.focus();
      };
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
    return(
        <>
        <HeaderComponent 
        name={'Create'}
        backpress={()=> navigation.goBack()}
        back={true}/>
        <View style={styles.upperContainer}>
            <TouchableOpacity>
                <Image 
                source={require('../../images/Group103.png')}
                style={styles.crossimage}
                />
            </TouchableOpacity>
            
                <CircleButton
          isBool={isBool}
          texColor={isBool ? 'white' : 'white'}
          bg={isBool ? '#561CE0' : '#561CE0'}
          onPress={() => setBool(prev => !prev)}
          text={isBool ? 'Post' : 'Post'}
        />
        </View>
        <TextInput
        ref={ref}
        placeholder={`${'An interesting '}\n${'description...'}`}
        style={styles.textinput}
        value=''
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
        </>
    )

}
export default CreatePost;
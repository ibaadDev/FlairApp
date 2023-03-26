import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useRef, useState} from 'react'
import { styles } from './styles'
import { LoginInputComp } from '../../components/LoginInputComp/LoginInputComp'
import { color } from '../../config/color'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {launchImageLibrary} from 'react-native-image-picker';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import CircleButton from '../../components/CircleButton'

const EditProfile = ({navigation}) => {
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const [isBool, setBool] = useState(true);
    const handleClick1 = () => {
        ref1.current.focus();
      };
    const handleClick2 = () => {
        ref2.current.focus();
      };
    const handleClick3 = () => {
        ref3.current.focus();
      };
    const handleClick4 = () => {
        ref4.current.focus();
      };

      const [EditData, setEditData] = useState({
        Fullname:'',
        Username:'',
        changepassword: '',
        Bio: '',
      });
      const {
        Fullname,
        Username,
        changepassword,
        Bio} = EditData;
        const updateState = data => setEditData(() => ({...EditData, ...data}));
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

    return(
        <View style={styles.mainContainer}>
        <HeaderComponent
        back={true}
        name={'Profile Setting'}
        backpress={()=> navigation.goBack()}
        />
        <View style={styles.upperContainer}>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}>
                <Image 
                source={require('../../images/Group103.png')}
                style={styles.crossimage}
                />
                <Text style={{color:color.black,fontSize:hp('2.2'),marginLeft:wp('3')}}>Edit Profile</Text>
            </TouchableOpacity>
            
                <CircleButton
          isBool={isBool}
          texColor={'white'}
          bg={'#561CE0'}
          onPress={() => setBool(prev => !prev)}
          text={ 'save'}
        />
        </View>
        <View style={styles.midView}>
    <Image
    source={require('../../images/image1.jpg')}
    style={styles.imagestyles}
    />
    <TouchableOpacity  
    onPress={()=>{GetImgesPicker()}}
    >
        <Text style={styles.changeProfile}>Change Profile Photo</Text>
    </TouchableOpacity>
    </View>
    <View style={styles.editView}>
    <Text>Full Name</Text>
    <View
    style={styles.textinputstyle}>
    <TextInput
    ref={ref1}
    placeholder='Full Name'

    placeholderTextColor={color.greyTextcolor}
    value={Fullname}
    onChangeText={e => updateState({Fullname: e})}
    style={{width:wp('80'),color:color.black}}
    />
    <TouchableOpacity onPress={()=>{handleClick1()}}>
    <Text style={{color:color.primaryColor}}>Edit</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={styles.editView}>
    <Text>Username</Text>
    <View
    style={styles.textinputstyle}>
    <TextInput
    ref={ref2}
    placeholder='Username'
    placeholderTextColor={color.greyTextcolor}
    value={Username}
    onChangeText={e => updateState({Username: e})}
    style={{width:wp('80'),color:color.black}}
    />
    <TouchableOpacity onPress={()=>{handleClick2()}}>
    <Text style={{color:color.primaryColor}}>Edit</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={styles.editView}>
    <Text>Change Password</Text>
    <View
    style={styles.textinputstyle}>
    <TextInput
    ref={ref3}
    placeholder='Change Password'
    placeholderTextColor={color.greyTextcolor}
    value={changepassword}
    onChangeText={e => updateState({changepassword: e})}
    style={{width:wp('80'),color:color.black}}
    />
    <TouchableOpacity onPress={()=>{handleClick3()}}>
    <Text style={{color:color.primaryColor}}>Edit</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View style={styles.editView}>
    <Text>Bio</Text>
    <View
    style={styles.textinputstyle}>
    <TextInput
    ref={ref4}
    placeholder='Bio'
    placeholderTextColor={color.greyTextcolor}
    value={Bio}
    onChangeText={e => updateState({Bio: e})}
    style={{width:wp('80'),color:color.black}}
    />
    <TouchableOpacity onPress={()=>{handleClick4()}}>
    <Text style={{color:color.primaryColor}}>Edit</Text>
    </TouchableOpacity>
    </View>
    </View>
        </View>
    )
}
export default EditProfile;
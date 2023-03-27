import { FlatList, Image, Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React,{useRef, useState} from 'react'
import { styles } from './styles'
import { LoginInputComp } from '../../components/LoginInputComp/LoginInputComp'
import { color, colorTutor_ } from '../../config/color'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import {launchImageLibrary} from 'react-native-image-picker';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import CircleButton from '../../components/CircleButton'
import axios from 'react-native-axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector,useDispatch} from 'react-redux';
import { errorMessage, successMessage } from '../../config/NotificationMessage'
import { errorHandler } from '../../config/helperFunction'

const EditProfile = ({navigation}) => {
    const {userData, token} = useSelector(state =>state.userData);
    const [show,setShow] =useState(false)
    const [showconfpass,setshowconfpass] =useState(false)
    const [showNewpass,setshowNewpass] =useState(false)
    const [isModalvisible,setisModalvisible] =useState(false)
    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref4 = useRef(null);
    const [isBool, setBool] = useState(true);
    const handleClick1 = () => {
        ref1.current.focus();
      };
    const handleClick2 = () => {
        ref2.current.focus();
      };
    const handleClick3 = () => {
        setisModalvisible(!isModalvisible)
      };
    const handleClick4 = () => {
        ref4.current.focus();
      };
      let name ;
      let uri ;
      let type ;

      const [EditData, setEditData] = useState({
        Fullname:userData.name,
        Username:userData.user_name,
        Bio: userData.bio,
        old_password:'',
       New_password:'',
        password_confirmation:''
      });
      const {
        Fullname,
        Username,
        Bio,
        old_password,
        New_password,
        password_confirmation
        } = EditData;
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
                name = res.assets.fileName,
                uri = res.assets.uri,
                type = res.assets.type
              console.log(res, 'resCopy');
            //   dispatch(AddImage(resCopy));
            // updateImage(res?.assets);
            }
          },
        );
      }
      const handleconfpass= ()=>{
        setshowconfpass(!showconfpass)
      }
      const handleNewpass= ()=>{
        setshowNewpass(!showNewpass)
      }
      const handleoldpass= ()=>{
        setShow(!show)
      }
      

      const UpdateProfile =() =>{
        const data_temp = new FormData();
        data_temp.append("name", Fullname);
        data_temp.append("user_name", Username);
        data_temp.append("email", userData.email);
        data_temp.append("profile_image", ('file',{name:name,uri:uri, type:type}));
        data_temp.append("bio", Bio);
        data_temp.append("password", New_password);
        data_temp.append( "password_confirmation",password_confirmation);
        data_temp.append("old_password", old_password);
        data_temp.append(
            "profile_image_remove",1
        );
        axios.post('https://flairapp.clickysoft.net/api/authorized/user',data_temp,{
            header:{
                Authorization: `Bearer ${token}`,
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
            }
        }).then((res)=>{    
            successMessage(res.data.message)
        }
            
        ).catch((err)=>{
            errorMessage(errorHandler(err))
            console.log(err)

        })

      }
    return(
        <SafeAreaView style={styles.mainContainer}>
            <Modal
          transparent={true}
          animationType="fade"
          visible={isModalvisible}
        >
            <View style={{ 
             width:wp('100'),
             height:hp('100'),
             justifyContent: "center",
             alignItems: "center",
             backgroundColor: "rgba(0,0,0,0.5)",}}> 
            <View style={{
                width:wp('80'),
                backgroundColor:'white',
                borderRadius:10,
                padding:10     

            }}>
                 
            <TouchableOpacity style={{alignSelf:'flex-start',marginVertical:hp('2')}}
            onPress={()=>{setisModalvisible(!isModalvisible),console.log(password_confirmation)}}
            >
                <Image source={require('../../images/Group103.png')}/>
            </TouchableOpacity>
            <Text style={{color:color.greyTextcolor, fontSize:hp('2')}}>Old Password</Text>
            <View style ={{flexDirection:'row',alignItems:'center'}}>
            <TextInput
            secureTextEntry={show?false:true}
            placeholder='*******'
            placeholderTextColor={color.black}    
            value={old_password}
            onChangeText={e => updateState({old_password: e})}
            />
            <Ionicons
          onPress={()=>{handleoldpass()}}
          name={show ? 'eye-outline' : 'eye-off-outline'}
        // name={'eye-off-outline'}
          color={ colorTutor_.ipalforgetTxtColor
          }
          style={{
            marginLeft: 'auto',
            marginRight: wp('3'),
            paddingLeft: wp('2'),
          }}
          size={hp('3')}
        />
        </View> 
            <Text style={{color:color.greyTextcolor, fontSize:hp('2')}}>New Password</Text>
            <View style ={{flexDirection:'row',alignItems:'center'}}>
            <TextInput
            secureTextEntry={showNewpass?false:true}
            placeholder='*******'
            placeholderTextColor={color.black}    
            value={New_password}
            onChangeText={e => updateState({New_password: e})}
            />
            <Ionicons
          onPress={()=>{handleNewpass()}}
          name={showNewpass ? 'eye-outline' : 'eye-off-outline'}
          color={ colorTutor_.ipalforgetTxtColor
          }
          style={{
            marginLeft: 'auto',
            marginRight: wp('3'),
            paddingLeft: wp('2'),
          }}
          size={hp('3')}
        />
        </View> 
            <Text style={{color:color.greyTextcolor, fontSize:hp('2')}}>Confirm Password</Text>
            <View style ={{flexDirection:'row',alignItems:'center'}}>
            <TextInput
            secureTextEntry={showconfpass?false:true}
            placeholder='*******'
            placeholderTextColor={color.black}    
            value={password_confirmation}
            onChangeText={e => updateState({password_confirmation: e})}
            />
            <Ionicons
          onPress={()=>{handleconfpass()}}
          name={showconfpass ? 'eye-outline' : 'eye-off-outline'}
          color={ colorTutor_.ipalforgetTxtColor
          }
          style={{
            marginLeft: 'auto',
            marginRight: wp('3'),
            paddingLeft: wp('2'),
          }}
          size={hp('3')}
        />
        </View> 
        <TouchableOpacity style={styles.savebtn}
        onPress={()=>{setisModalvisible(!isModalvisible)}}
        >
            <Text style={{color:'white'}}>Save</Text>
        </TouchableOpacity>
            </View>
            </View>

        </Modal>
        <HeaderComponent
        back={true}
        name={'Profile Setting'}
        backpress={()=> navigation.goBack()}
        />
        <View style={styles.upperContainer}>
            <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
           >
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
          onPress={() => {setBool(prev => !prev), UpdateProfile()}}
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
    <Text style={{width:wp('60'),color:color.black}}>
     ********
    </Text>
    <TouchableOpacity onPress={()=>{handleClick3()}}>
    <Text style={{color:color.primaryColor}}>Change Password</Text>
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
        </SafeAreaView>
    )
}
export default EditProfile;
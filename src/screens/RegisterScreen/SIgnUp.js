import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import { styles } from './styles'
import { LoginInputComp } from '../../components/LoginInputComp/LoginInputComp'
import { color } from '../../config/color'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import { ButtonThemeComp } from '../../components/ButtonThemeComp/ButtonThemeComp'
import { SignUpUrl } from '../../config/Urls'
import axios from 'react-native-axios';

const SignUp = () => {
    const handleClick = () => setShow(!show);
  const [show, setShow] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [SignUpData, setSignUpData] = useState({
    Fullname:'',
    Username:'',
    email: '',
    password: '',
    confirmpassword
  });
  const {
    Fullname,
    Username,
    email, 
    password,
    confirmpassword} = SignUpData;
    const updateState = data => setSignUpData(() => ({...SignUpData, ...data}));
    const SignUpFun = () => {
      setIsloading(true);
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (
        Fullname!= ''&&
        Username !=''&&
        email != '' &&
        password != '' &&
        reg.test(email) === true &&
        password.length >= 8 &&
        confirmpassword !=''&&
        reg.test(email) === true&&
        confirmpassword.length >=8
      ) {
        // let body = new FormData()
        // body.append('name',Fullname)
        // body.append('user_name',Username)
        // body.append('email',email)
        // body.append('password',password)
        // body.append('password_confirmation',confirmpassword)
        // body.append('terms','')
        // body.append('user_agreement','')
        let body ={
          name:Fullname,
          user_name:Username,
          email:email,
          password:password,
          password_confirmation:confirmpassword,
          terms:'',
          user_agreement:0
        }
        axios
          .post(SignUpUrl, body,
            {
              headers: {
                'Content-Type': 'application/json'
            },
            }
            )

          .then(function (res) {
            setIsloading(false);
            console.log(res);
            // dispatch({
            //   type: types.LoginType,
            //   payload: res.data.data,
            // });
            // dispatch({
            //   type: types.LoginTypeToken,
            //   payload: token,
            // });
          })
          .catch(function (error) {
            console.log("sadaslj",error)
            setIsloading(false);
            errorMessage(errorHandler(error));
          });
      } else {
        setIsloading(false);
        errorMessage('Please type correct information');
      }
    };
  return (
    <View style={styles.mainContainer} >
       <View style={styles.logo}>
       <Image source={require('../../images/Group6.png')}/>
        <Text style={styles.name}>Flair</Text>
       </View>
        <LoginInputComp
        placeholder={'Fullname'}
        value={Fullname}
          onChangeText={e => updateState({Fullname: e})}
        />
        <LoginInputComp
        placeholder={'Username'}
        value={Username}
          onChangeText={e => updateState({Username: e})}
        />
        <LoginInputComp
        placeholder={'Email'}
        value={email}
          onChangeText={e => updateState({email: e})}
        />
        <LoginInputComp
        secureTextEntry={show ? false : true}
        placeholder={'Password'}
        value={password}
          onChangeText={e => updateState({password: e})}
        />
        <LoginInputComp
        secureTextEntry={show ? false : true}
        placeholder={'Confirm Password'}
        value={confirmpassword}
        onChangeText={e => updateState({confirmpassword: e})}
        color={color.black}
        Ionicons={true}
        eyeIconName={show ? 'eye-outline' : 'eye-off-outline'}
        eyeIconPress={()=>handleClick()}
        eyeIconSize={hp('2.8')}
        Iconcolor2={color.themeColorlight}
        />
     
        <ButtonThemeComp
        style={styles.signBtn}
        text={'Sign Up'}
        onPress={() => SignUpFun()}
      />
      <View style={styles.creatacc}>
          <Text style={{
            fontSize:hp('2'),
            color:color.greyTextcolor
          }}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.forgettext}>Login In</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default SignUp

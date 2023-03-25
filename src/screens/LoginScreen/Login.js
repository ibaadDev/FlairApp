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
import { errorMessage } from '../../config/NotificationMessage'
import { errorHandler } from '../../config/helperFunction'

const Login = ({navigation}) => {
    const handleClick = () => setShow(!show);
  const [show, setShow] = useState(false);
  const [isloading, setIsloading] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const {email, password} = loginData;

  // const dispatch = useDispatch();
  const updateState = data => setLoginData(() => ({...loginData, ...data}));
  const loginUserFun = () => {
    setIsloading(true);
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (
      email != '' &&
      password != '' &&
      reg.test(email) === true &&
      password.length >= 8
    ) {
      let body = {
        email: email,
        password: password,
      };
      axios
        .post(LoginUrl, body)
        .then(function (res) {
          setIsloading(false);
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
        placeholder={'Username'}
        value={email}
        onChangeText={e => updateState({email: e})}
        />
        <LoginInputComp
         secureTextEntry={show ? false : true}
        placeholder={'Password'}
        Ionicons={true}
        eyeIconName={show ? 'eye-outline' : 'eye-off-outline'}
        eyeIconPress={()=>handleClick()}
        value={password}
        onChangeText={e => updateState({password: e})}
        color={color.black}
        eyeIconSize={hp('2.8')}
        Iconcolor2={color.themeColorlight}
        />

        <TouchableOpacity
        style={styles.forgetbtnstyle}
          onPress={() => navigation.navigate('ForgetScreen')}
        >
          <Text style={styles.forgettext}>Forget password?</Text>
        </TouchableOpacity>
     
        <ButtonThemeComp
        style={styles.signBtn}
        text={'Login In'}
        onPress={() => loginUserFun()}
      />
      <View style={styles.creatacc}>
          <Text style={{
            fontSize:hp('2'),
            color:color.greyTextcolor
          }}>Don't have an account?</Text>
          <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
            <Text style={styles.forgettext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login

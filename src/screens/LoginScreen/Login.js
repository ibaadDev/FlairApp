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

const Login = () => {
    const handleClick = () => setShow(!show);
  const [show, setShow] = useState(false);
  return (
    <View style={styles.mainContainer} >
       <View style={styles.logo}>
       <Image source={require('../../images/Group6.png')}/>
        <Text style={styles.name}>Flair</Text>
       </View>
        <LoginInputComp
        placeholder={'Username'}
        value=''
          // onChangeText={e => updateState({password: e})}
        />
        <LoginInputComp
         secureTextEntry={show ? false : true}
        placeholder={'Password'}
        Ionicons={true}
        eyeIconName={show ? 'eye-outline' : 'eye-off-outline'}
        value=''
        // onChangeText={e => updateState({password: e})}
        color={color.black}
        eyeIconSize={hp('2.8')}
        Iconcolor2={color.themeColorlight}
        />

        <TouchableOpacity
        style={styles.forgetbtnstyle}
        //   onPress={() => navigation.navigate('MenteebottomTabs')}
        >
          <Text style={styles.forgettext}>Forget password?</Text>
        </TouchableOpacity>
     
        <ButtonThemeComp
        style={styles.signBtn}
        text={'Login In'}
        // onPress={() => loginUserFun()}
      />
      <View style={styles.creatacc}>
          <Text style={{
            fontSize:hp('2'),
            color:color.greyTextcolor
          }}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={styles.forgettext}>Sign Up</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login

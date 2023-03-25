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

const ForgetScreen = ()=>{
    const [isloading, setIsloading] = useState(false);
    const [loginData, setLoginData] = useState({
      email: ''
    });
    const {email} = loginData;
  
    // const dispatch = useDispatch();
    const updateState = data => setLoginData(() => ({...loginData, ...data}));
    return (
        <View style={styles.mainContainer} >
           <View style={styles.logo}>
           <Image source={require('../../images/Group6.png')}/>
            <Text style={styles.name}>Flair</Text>
           </View>
            <LoginInputComp
            placeholder={'Email'}
            value={email}
            onChangeText={e => updateState({email: e})}
            />
            <ButtonThemeComp
            style={styles.signBtn}
            text={'Send Email'}
            // onPress={() => loginUserFun()}
          />
          <View style={styles.creatacc}>
              <Text style={{
                fontSize:hp('2'),
                color:color.greyTextcolor
              }}>If you have an already account?</Text>
              <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
                <Text style={styles.forgettext}>Login In</Text>
              </TouchableOpacity>
            </View>
        </View>
      )
}
export default ForgetScreen;
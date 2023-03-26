import { View, Text, Image, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useRef } from 'react'
import { styles } from './styles'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import { CircleImageComp } from '../../components/CircleImageComp/CircleImageComp'
import { color } from '../../config/color'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import CircleButton from '../../components/CircleButton'

const Spotlight = ({navigation}) => {
    const data=[{},{},{}]

    return(
        <View style={styles.mainContainer}>
            <HeaderComponent
            back={true}
            name={'Spotlight'}
            backpress={()=> navigation.goBack()}
            />
             <FlatList
    data={data}
    contentContainerStyle={{marginBottom:hp('10')}}
    renderItem={({ item }) => {
      return(

        <View style={styles.container}>
    <View style={styles.innerContainer}>
      <Image
        style={styles.image}
        resizeMode="contain"
        source={require('../../images/image1.jpg')}
      />
      <View>
        <Text style={styles.text1}>Robin Waugh</Text>
        <Text style={styles.text2}>robinmusician</Text>
        {/* <Text style={styles.folowtxt}>Follow</Text>
        </View> */}
        <View style={styles.text3Container} >
          {/* <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text3}>
            music always put me in goog mood when nobody see me
          </Text> */}
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
          texColor={ color.white }
          bg={color.primaryColor}
          // onPress={() => setBool(prev => !prev)}
          text={'Follow' }
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
    <Image
        source={require('../../images/postman.jpg')}
        resizeMode={'cover'}
        style={styles.imagestyle}
        />
        <View style={styles.commintsView}>
            <TouchableOpacity style={{marginHorizontal:wp('3'),flexDirection:'row'}}>
                <Image
                source={require('../../images/Union1.png')}
                style={{marginRight:wp('2')}}
                />
                <Text style={{marginLeft:wp('2')}}>11.3k</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal:wp('3'),flexDirection:'row'}}>
                <Image
                source={require('../../images/comment-o.png')}
                style={{marginRight:wp('2')}}
                />
                <Text style={{marginLeft:wp('2')}}>21.4k</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal:wp('3'),flexDirection:'row'}}>
                <Image
                source={require('../../images/retweet1.png')}
                style={{marginRight:wp('2')}}
                />
                <Text style={{marginLeft:wp('2')}}>11k</Text>
            </TouchableOpacity>
        </View>
    </View>

      )}}
      />
        
        </View>
    )
}
export default Spotlight
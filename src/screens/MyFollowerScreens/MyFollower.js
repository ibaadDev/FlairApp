import { View, Text, Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import CircleButton from '../../components/CircleButton';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
const MyFollower = () => {
  const data=[{isBool:true},{isBool:false},{isBool:false},{isBool:true},{isBool:true},{isBool:false}]
    // const [isBool, setBool] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <HeaderComponent
      back={true}
      name={'Following'}
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
        //   isBool={i}
          texColor={item.isBool ? 'grey' : 'grey'}
          bg={item.isBool ? 'white' : 'white'}
          // onPress={() => setBool(prev => !prev)}
          text={item.isBool ? 'Following' : 'Following'}
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
    </View>
      )
    }}
    />
    </View>
  )
}

export default MyFollower
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CircleButton from '../../components/CircleButton';
import {hp, wp} from '../../config/responsive';
const HomeScreen = () => {
  const [isBool, setBool] = useState(false);
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'white',
        shadowColor: '#000',
        flex: 1,
      }}>
        //Component View
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
            <View style={styles.text3Container}>
              <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text3}>
                music always put me in goog mood when nobody see me
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: hp('2'),
            }}>
            <CircleButton
              isBool={isBool}
              texColor={isBool ? 'white' : 'grey'}
              bg={isBool ? '#561CE0' : 'white'}
              onPress={() => setBool(prev => !prev)}
              text={isBool ? 'Follow' : 'Followed'}
            />
          </View>
        </View>
        <View style={styles.divider}></View>
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
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#EFEFEF',
  },
  innerContainer: {
    width: wp('90'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: wp('20'),
    height: hp('10'),
    borderRadius: 50,
    marginRight: wp('1'),
  },
  text1: {
    fontWeight: '500',
    color: 'black',
    fontSize: hp('2.5'),
  },
  text3Container: {
    width: wp('40'),
  },
  text3: {
    letterSpacing: 0.2,
    color: 'black',
    fontSize: hp('1.8'),
  },
  divider: {
    marginTop: hp('1'),
    backgroundColor: '#EFEFEF',
    width: wp('86'),
    height: hp('0.1'),
    alignSelf: 'center',
    marginBottom: hp('1'),
  },
  bottomContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginLeft: wp('2'),
    width: wp('83'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomText: {
    fontWeight: 'bold',
    fontSize: hp('2'),
  },
});

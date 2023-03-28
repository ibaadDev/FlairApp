import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Menu, Provider } from 'react-native-paper';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  import Entypo from 'react-native-vector-icons/Entypo';

const MenuItem = ({onPress}) => {
  const [visible, setVisible] = useState(false);
  const closeMenu = () => setVisible(false);
const openMenu = () => setVisible(true);
    function onPress(){
        visible?openMenu:closeMenu
    }
  return (
    <Provider>
    <View style={{
        marginLeft: 'auto',
        marginRight: wp('3'),
        paddingLeft: wp('2'),
      }}>

    <Menu
      visible={visible}
      onDismiss={closeMenu}
      anchor={
        <Entypo
        onPress={onPress}
        name={'dots-three-vertical'}
        color={'black' }
        size={hp('3')}
      />
        // <Button onPress={openMenu} mode="outlined">
        //   Show menu
        // </Button>
      }
      
      >
     
      <Menu.Item
        onPress={() => {
          Alert.alert('Action : ', 'Print');
        }}
        title="Delete"
      />
      <Menu.Item
        onPress={() => {
          Alert.alert('Action : ', 'Print');
        }}
        title="share"
      />
      <Menu.Item
        onPress={() => {
          Alert.alert('Action : ', 'Print');
        }}
        title="Unfolow"
      />
      </Menu>
      </View>
      </Provider>
  )
}

export default MenuItem

const styles = StyleSheet.create({})
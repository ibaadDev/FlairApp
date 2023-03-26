/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { screens } from './src/screens';
import Followers from './src/screens/FollowersScreen/Followers';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigatior from './src/navigations/naviagation';
import OneSignal from 'react-native-onesignal';
import FlashMessage from "react-native-flash-message";
import { showMessage, hideMessage } from "react-native-flash-message";


//https://xd.adobe.com/view/adfdbf66-cce5-44aa-98ad-44df2f0019ae-f8ae/screen/b6fa581b-6a4a-4447-ad68-654223151399/

function App(){
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  // useEffect(()=>{
    
  //   OneSignal.setAppId("47b84857-680a-4431-bc4a-bc036aea4c97");
  //   // requestUserPermission();
  //   // NotifictionListerner();
  //   // promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
  //   // We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
  //   OneSignal.promptForPushNotificationsWithUserResponse();
      
  //   //Method for handling notifications received while app in foreground
  //   OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  //     console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  //     let notification = notificationReceivedEvent.getNotification();
  //     console.log(notification)
  //    showMessage({
  //     message: notification.title,
  //     type: "default",
  //     description:notification.body,
  //     backgroundColor:"white",
  //     color:'black'
  //    })
  //     // Alert.alert(notification.title,notification.body,[
  //     //   {
  //     //     text:'Ok',
  //     //   }
  //     // ])
  //     const data = notification.additionalData
  //     console.log("additionalData: ", data);
  //     // Complete with null means don't show a notification.
  //     notificationReceivedEvent.complete(notification);
  //   });
  //   OneSignal.setNotificationOpenedHandler(notification => {
  //     console.log("OneSignal: notification opened:", notification);
  //   });
  // },[])

  return (
    <>
    <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <StackNavigatior/>
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

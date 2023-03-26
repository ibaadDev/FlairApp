/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import StackNavigatior from './src/navigations/naviagation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import OneSignal from 'react-native-onesignal';
import FlashMessage from "react-native-flash-message";
import { persistor,store } from './src/Redux/Reducer';



//https://xd.adobe.com/view/adfdbf66-cce5-44aa-98ad-44df2f0019ae-f8ae/screen/b6fa581b-6a4a-4447-ad68-654223151399/

function Apptwo(){
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
    </>
  );
}


export default Apptwo;

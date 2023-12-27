/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from "react-native-push-notification"

AppRegistry.registerComponent(appName, () => App);


PushNotification.configure({
    onRegister: function (token) {
        console.log("TOKEN:", token);
      },
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
    
        // process the action
      },
    onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    
        // process the notification
    
        // (required) Called when a remote is received or opened, or local notification is opened
      },
      channelid:"1",
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      popInitialNotification: true,
      requestPermissions: Platform.OS === 'ios'


})
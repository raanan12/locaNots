import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet,Platform } from 'react-native';
import Main from './screen/Main';
import { Data1 } from './contextApi';
import NewList from './screen/NewList';
import ListShow from './screen/ListShow';
import AditList from './screen/AditList';
import SettingAlert from './screen/SettingAlert';
import PushNotification, {Importance} from 'react-native-push-notification';

const Stack = createStackNavigator()

function App() {

  useEffect(()=>{
    if(Platform.OS == "android"){
        PushNotification.createChannel(
          {
            channelId: "channel-id", // (required)
            channelName: "My channel", // (required)
            channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
            playSound: true, // (optional) default: true
            soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
            importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
            vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
          },
        (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
      )
      PushNotification.getChannels(function (channel_ids) {
        console.log(channel_ids); // ['channel_id_1']
      });
    }
     },[])
  return (
    <NavigationContainer  independent={true}>
      <Data1>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='main' component={Main}/>
        <Stack.Screen name='newList' component={NewList}/>
        <Stack.Screen name='showlist' component={ListShow}/>
        <Stack.Screen name='editList' component={AditList} />
        <Stack.Screen name='settingAlert' component={SettingAlert} />
      </Stack.Navigator>
    </Data1>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:22,
    backgroundColor: '#fff',
    alignItems: 'center',
    position:'relative'
  },
});

export default App;
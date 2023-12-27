// show the list that the user selects
import { Button,StyleSheet, Text, View ,SafeAreaView,ScrollView, Alert,TouchableOpacity,Image} from 'react-native'
import React,{useContext,useState,useEffect} from 'react'
import AllData from '../contextApi'
import { useNavigation } from '@react-navigation/native'
import { Appbar, TextInput } from 'react-native-paper';
import { Dimensions } from 'react-native';
import PushNotification, {Importance} from 'react-native-push-notification';
import AlertTime from './AlertTime';
import AlertLocation from './AlertLocation';

// הגדר והפעל התראות ברקע כאשר האפליקציה כבויה




const { height: screenHeight } = Dimensions.get('window');


export default function SettingAlert() {

    const [showMenu, setShowMenu] = useState(false)
    const [typeAlert,setTypeAlert] = useState(false)
    const AllData1 = useContext(AllData)
    const nav: any = useNavigation()
    //   A finction the show is menu
    const showTheMenu = () => {
            if(showMenu == true){
                return (
                    <View style={styles.styleMenu}>
    
                    </View>
                ) 
            }
         }

    //  A finction the show is setting type alert
    const showType =()=>{
        if(typeAlert == false){
            return (
                <AlertTime/>
            )
        }
        else{
            return (
                <AlertLocation/>
            )
        }
    }
    const sendPhon = ()=>{
        PushNotification.localNotification({
          channelId: 'channel-id', // ציון הערוץ הנכון
          title: 'My Notification Title',
          message: 'Hello World!',
        },
        // (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
        console.log("ppp");
      }

      


     const sendLook =()=>{
        PushNotification.localNotificationSchedule({
            channelId: 'channel-id', // ציון הערוץ הנכון
            title: 'Scheduled Notification',
            message: 'This notification is scheduled for a specific date and time.',
            date:  new Date(Date.now() + 60 * 1000), // תאריך ושעה מסוימים (שנה, חודש, יום, שעה, דקות)
            allowWhileIdle:true,
        })
        }
  
        let contaneList = AllData1?.showList.contane 



  return (
      <View style={styles.main}>
          <Appbar.Header style={styles.haeder}>
             <TouchableOpacity  onPress={() => { nav.navigate('showlist') }}>
                <Image style={styles.bottun} source={require("./imges/undo.png")}/>
              </TouchableOpacity>
              <Text style={styles.textTitle}> setting alert to list</Text>
              <TouchableOpacity>
                <Image style={styles.bottun} source={require("./imges/menubar.png")}/>
              </TouchableOpacity>
      </Appbar.Header>

          {/* <Button title='pppp' onPress={sendPhon}/>
          <Button title='pppp222' onPress={sendLook}/> */}
          <View style={styles.bottuns}>
              <TouchableOpacity style={styles.botton1} onPress={() => { setTypeAlert(false) }}>
                  <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>alert time</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.botton1} onPress={() => { setTypeAlert(true) }}>
                  <Text style={{ color: "white", fontWeight: "600", fontSize: 15 }}>alert location</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.styleList}>
            {showType()}
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    main:{
        position:"relative",
        backgroundColor: '#fffdfa',

    },
    haeder: {
        width: '100%',
        borderBottomColor: 'gray',
        borderBottomWidth: 3,
        borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#4f92a8',
        paddingRight: 10
      },
    textTitle:{
        fontWeight:'900',
        fontSize:22,
    },
    styleMenu:{
        position:'absolute',
        backgroundColor:'white',
        top:80,
        right:10,
        zIndex:1,
        width:150,
        direction:'rtl',
        paddingRight:10,
        borderRadius:8,
        display:'flex',
        justifyContent:'space-around',
        alignItems:'flex-start'
    },
    bottuns:{
        display:"flex",
        flexDirection:'row',
        alignItems:"center",
        justifyContent:"space-around",
        padding:10
    },
    styleList:{
        fontSize:17,
        backgroundColor: '#fffdfa',
        borderRadius: 4,
        height: screenHeight,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        shadowColor: 'rgba(0, 0, 0, 0.2)',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 1,
        elevation: 2,
        width:'100%'
    },
    botton1:{
        height:40,
        width:150,
        backgroundColor:"#A84959",
        justifyContent:"center",
        borderRadius:8,
        padding:8
    },
    bottun:{
        margin:5,
        height:50,
        width:50
    },
    lineText:{
        borderBottomtColor:'gray',
        borderBottomStyle:'solid',
        borderBottomWidth:2,
        fontSize:18,
        paddingTop:5,
        paddingBottom:3,
        fontWeight:'600'
    }

})
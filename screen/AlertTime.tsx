import { StyleSheet, Text, View,TouchableOpacity ,Button} from 'react-native'
import React,{useState,useContext,useEffect} from 'react'
import DatePicker from 'react-native-date-picker';
import PushNotification from 'react-native-push-notification'
import Toast from 'react-native-toast-message';

// import { useNavigation } from '@react-navigation/native'
import AllData from '../contextApi'

                                                                     
export default function AlertTime() {
  const AllData1 = useContext(AllData)
  const [date,setDate]=useState(new Date())
  // const id = AllData1?.showList.id
  const [showSetType,setShowSetType]=useState(false)
  // const nav: any = useNavigation()

  const setingAlert = () =>{
    PushNotification.localNotificationSchedule({
        channelId: 'channel-id', // ציון הערוץ הנכון
        title:AllData1?.showList.title,
        message:AllData1?.showList.contane.slice(0,10),
        date: date, // תאריך ושעה מסוימים (שנה, חודש, יום, שעה, דקות)
        allowWhileIdle:true,
    })
    return(
      Toast.show({text1: `setting alert to ${date.getFullYear()} / ${date.getDate()} / ${date.getMonth()+1} ${date.getHours()}:${date.getMinutes()}` })
      )
    }
    return (
      <View style={styles.main}>
      <Toast/>
      <TouchableOpacity style={styles.button} onPress={()=>{setShowSetType(true)}}>
        <Text style={{color:"white",fontWeight:"600",fontSize:15}}>Seting time</Text>
      </TouchableOpacity>
      <DatePicker
        modal
        open={showSetType}
        date={date}
        onConfirm={(date)=>{
            setShowSetType(false)
            setDate(date)            
        }}
        onCancel={()=>{setShowSetType(false)}}
      />
        <Text style={styles.text}>Setting an alert : </Text>
        <Text style={[styles.text,{marginLeft:120}]}>to date :  {date.getFullYear()}/{date.getMonth()+1}/{date.getDate()}</Text>
        <Text style={[styles.text,{marginLeft:120}]}>at : {date.getHours()}:{date.getMinutes()} </Text>
      <TouchableOpacity style={styles.button2} onPress={setingAlert}>
        <Text style={{color:"white",fontWeight:"600",fontSize:15}}>Setting an alert</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        // flex:1,
        // width:800

    },
    button:{
        height:40,
        width:150,
        backgroundColor:"#A84959",
        justifyContent:"center",
        borderRadius:8,
        padding:8,
        marginTop:15
    },
    text:{
        fontWeight:'600',
        fontSize:16,
        marginTop:15,
        paddingLeft:5
    },
    button2:{
        height:40,
        width:'100%',
        backgroundColor:"#A84959",
        justifyContent:"center",
        alignItems:'center',
        borderRadius:8,
        padding:8,
        marginTop:15
    },
})
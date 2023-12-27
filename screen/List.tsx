import { StyleSheet, Text, View ,TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import AllData from '../contextApi';
import {useNavigation} from '@react-navigation/native'

export default function List(props:any) {
  const AllData1 = useContext(AllData)
  const nav:any = useNavigation()

  // The function takes part of the text and puts it in a note on the main screen
  const contenText =()=>{
    if(props.val.contane.indexOf('\n') == -1){
      return  props.val.contane.slice(0,30)
    }
    else{
      let arr = props.val.contane.split("\n")
      let text2 = "" 
      if(arr.length > 4){
        for(let i = 0; i < 4;i++){
          text2 = text2 + arr[i].slice(0,30) +"\n" 
        }
        
      }
      else{
        arr.forEach((val:any) => {
          text2 = text2 + val.slice(0,30) +"\n" 
        });
      }
      return text2
    }

  }

  return (
    <TouchableOpacity onPress={()=>{AllData1?.setShowList(props.val);nav.navigate('showlist');
    }}  style={styles.main} >
      <Text style={styles.title}>{props.val.title}</Text>
      <Text style={styles.text}>
        {contenText()}
      </Text>
    </TouchableOpacity >
  )
}

const styles = StyleSheet.create({
  main:{
    display:'flex',
    width:'45%',
    height:135,
    backgroundColor:'#FFE1E5',
    margin:8,
    marginTop:15, 
    borderRadius:5,
    elevation: 10,
  },
  title:{
    width:'100%',
    backgroundColor:'#A84959',
    padding:6,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    fontSize:18,
    color:"white"
  },
  text:{
    padding:10,
    fontWeight:"600"
  }
})
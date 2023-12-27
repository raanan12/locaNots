import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function BottomPart(props:any) {
  const nav:any = useNavigation()

  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={()=>{nav.navigate('newList')}} >
      <Image style={styles.bottun} source={require('./imges/plus.png')} />
      </TouchableOpacity>
      {/* <IconButton   iconColor="white"  icon="plus"  size={40} /> */}
    </View>
  )
} 

const styles = StyleSheet.create({
    main:{
      backgroundColor:'gray',
      width:'100%',
      height:80,
      position:'absolute',
      bottom:0,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    bottun:{
        margin:5,
        height:50,
        width:50
    }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Heder() {
  return (
    <View>
      <Text style ={styles.title}>loca notes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        borderBottomColor:'black',
        borderBottomWidth:3,
        borderStyle:'solid'
    }
})
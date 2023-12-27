// main screen that show all list 

import { StyleSheet, Text, View ,SafeAreaView,ScrollView } from 'react-native'
import React,{useContext} from 'react'
import AllData from '../contextApi'
import List from './List'

export default function MainList() {
  const AllData1 = useContext(AllData)
  const a = [1,2,3,4]
  return (
    <View style={styles.main}>
    <SafeAreaView >
        <ScrollView contentContainerStyle={styles.scrolStyle}>
        { 
            AllData1?.arrList.map((val,ind)=>{
              return <List val={val}  ind={ind}/>
            })
        }
        </ScrollView>
      </SafeAreaView>
      </View>
  )
}

const styles = StyleSheet.create({
  main: {
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    width:'100%',
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    backgroundColor: '#fffdfa',
    minHeight:700
  },
  scrolStyle:{
    display:'flex',
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-around',
    width:'100%',
    paddingBottom:85
  }
})
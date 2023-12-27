import {TextInput, StyleSheet, Text, View ,SafeAreaView,ScrollView,ImageBackground,TouchableOpacity,Image} from 'react-native'
import AllData from '../contextApi';
import React,{useState,useContext} from 'react'
import { IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import {Appbar} from 'react-native-paper';


type list = {
  title: string,
  contane: string,
  id: string,
  date: string,
}

const { height: screenHeight } = Dimensions.get('window');
export default function (props:any) {
  const AllData1 = useContext(AllData)
  const [textl,setTextL]=useState("")
  const [heder,setHeder]=useState("")

  const nav:any = useNavigation()

  // A function save the list 
  const addList =  ()=>{
    const currentDate = new Date();
    
    let hederF = heder;
    // if the user not enter title use beginning for title 
    if(heder.length < 1 && textl.length >1){
      if(textl.indexOf("\n") > -1 && textl.indexOf("\n") < 13){
        hederF = textl.slice(0,textl.indexOf("\n"))
      }
      else{
        hederF = textl.slice(0,13)
      }
    }
    else if(heder.length < 1 ){
      hederF = 'Enter a title'
    }
    let content2 =  textl.slice(0,textl.length)
    
    let temp:list = {
      title:hederF,
      contane:content2,
      id:'3',
      date:`${currentDate.getDate()}.${currentDate.getMonth()+1}.${currentDate.getFullYear()}`
    }

    AllData1?.addList(temp);
  }
  return (
    <View style={styles.main}>
          <Appbar.Header style={styles.haeder}>

          <TouchableOpacity  onPress={() => { nav.navigate('showlist') ;addList()}}>
                <Image style={styles.bottun} source={require("./imges/checked.png")}/>
          </TouchableOpacity>
            <TextInput placeholder='Enter a title' onChangeText={setHeder} value={heder} style={styles.haederInput}/>
          </Appbar.Header>
      <SafeAreaView >
        <ScrollView contentContainerStyle={styles.scrolStyle}>
        <View style={styles.notebook}>
            <TextInput
              style={styles.input}
              multiline={true}
              value={textl}
              onChangeText={setTextL}
              placeholder="הזן טקסט כאן..."
              placeholderTextColor="#999"
              textAlignVertical="top"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  notebook: {
    backgroundColor:'#FFE1E5',
    borderRadius: 4,
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
  input: {
    fontSize:18,
    paddingTop:5,
    paddingBottom:3,
    fontWeight:'600',
    lineHeight: 28,
    borderWidth: 1, // הוסף מסגרת לסביבת כל שורה
    borderColor: '#ccc', // צבע המסגרת
    borderRadius: 4, // מעגליות המסגרת
    padding: 8, // מרווח פנימי בין השורות
    width:'100%',
    height: screenHeight  ,
  },
    main:{
      width:'100%'
    },
    scrolStyle:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
    },
    title:{
      textAlign:'left',
      fontSize:20,
      fontWeight:"bold",
    },
    inputStyle:{
    width: '97%',
    height: screenHeight
  },
  haederInput: {
    width: '80%',
    margin: 'auto',
    backgroundColor: '#4f92a8',
    borderWidth: 2.5,
    borderRadius: 8,
    padding: 9,
    fontSize: 23,
    color:"white"
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
    height: 80,
    backgroundColor: '#4f92a8',
    paddingRight: 10
  },

    buttonStyle:{
      marginTop:20,
      backgroundColor:'black'
    },
    bottun:{
      margin:5,
      height:40,
      width:40
  }
})
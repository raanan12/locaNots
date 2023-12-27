import { ImageBackgroundBase, TextInput, StyleSheet, Text, View, SafeAreaView, ScrollView, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import AllData from '../contextApi'
import { IconButton } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { Appbar } from 'react-native-paper';
import ButtonMenu from './ButtonMenu'
import { Dimensions } from 'react-native';
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors'

type list = {
  title: string,
  contane: string,
  id: string,
  date: string,
}

const { height: screenHeight } = Dimensions.get('window');
export default function AditList() {
  const AllData1 = useContext(AllData)
  const nav: any = useNavigation()
  const [textl, setTextL] = useState(AllData1?.showList.contane)
  const [heder, setHeder] = useState(AllData1?.showList.title)
  const [text, setText] = useState('');

  // the function edit the list
  const adit = () => {
    let temp: list = {
      title: heder,
      contane: textl,
      id: AllData1?.showList.id,
      date: AllData1?.showList.date
    }
    AllData1?.updatList(temp)
    nav.navigate('showlist')
  }

  return (
    <View>
      <Appbar.Header style={styles.haeder}>
        <TouchableOpacity onPress={adit}>
          <Image style={styles.bottun} source={require("./imges/checked.png")} />
        </TouchableOpacity>
        <TextInput onChangeText={setHeder} value={heder} style={styles.haederInput}/>
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
    width:'100%',
    height: screenHeight,


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
    height: screenHeight,
  },
  main: {
    width: '100%'
  },
  scrolStyle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url("./imges/checked.png")',
    backgroundSize: 'cover',

  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: "bold",
  },
  bacstyl: {
    width: '97%',
    height: screenHeight * 0.68,
  },
  inputStyle: {
    width: '97%',
    height: screenHeight * 0.68,
    padding: 20,
    paddingLeft: 42,
    fontSize: 18,
    lineHeight: 33
  },
  haederInput: {
    width: '80%',
    margin: 'auto',
    backgroundColor: '#4f92a8',
    borderColor: "#11e85",
    borderWidth: 2.5,
    borderRadius: 8,
    padding: 9,
    fontSize: 20,
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

  buttonStyle: {
    marginTop: 20,
    backgroundColor: 'black'
  },
  bottun: {
    margin: 5,
    height: 40,
    width: 40
  }
})
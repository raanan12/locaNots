// show the list that the user selects
import {StyleSheet, Text, View ,SafeAreaView,ScrollView, Alert,TouchableOpacity,Image} from 'react-native'
import React,{useContext,useState,useRef} from 'react'
import AllData from '../contextApi'
import { useNavigation } from '@react-navigation/native'
import { Appbar } from 'react-native-paper';
import ButtonMenu from './ButtonMenu'
import { Dimensions } from 'react-native';
import * as Animatable  from 'react-native-animatable'

const { height: screenHeight } = Dimensions.get('window');


export default function ListShow() {
    const [showMenu, setShowMenu] = useState(false)
    const nav: any = useNavigation()
    const AllData1 = useContext(AllData)
    const deleteList =()=>{
        Alert.alert("delete", "delet the list ?",
        [{ text: "ok", onPress: () => {AllData1?.deleteList(AllData1?.showList.id) ;nav.navigate('main');console.warn("list delet") }},
         { text: "Cancel" },
        ]
      )
      }
      const fadeIn = {
        from: {
          opacity: 0,
          scale: 0.3,
        },
        to: {
          opacity: 1,
          scale: 1,
        },
      };

    


//   A finction the show is menu
    const showTheMenu = () => {
        if(showMenu == true){
            return (
                <Animatable.View   animation={fadeIn} duration={450} style={styles.styleMenu}> 
                    <ButtonMenu func={deleteList} text={'Delete list'} />
                    <ButtonMenu func={()=>{nav.navigate('editList');setShowMenu(false)}} text={'Edit '} />
                    <ButtonMenu func={()=>{nav.navigate('settingAlert');setShowMenu(false)}} text={'Set an alert'} />
                </Animatable.View>

            ) 
        }
  }
  let contaneList = AllData1?.showList.contane 



  return (
      <View style={styles.main}>

          <Appbar.Header style={styles.haeder}>
             <TouchableOpacity  onPress={() => { nav.navigate('main') }}>
                <Image style={styles.bottun} source={require("./imges/undo.png")}/>
              </TouchableOpacity>
              <Text style={styles.textTitle}>{AllData1?.showList.title} </Text>
              <TouchableOpacity onPress={()=>{setShowMenu(!showMenu)}}>
                <Image style={styles.bottun} source={require("./imges/menubar.png")}/>
              </TouchableOpacity>
          </Appbar.Header>

          {showTheMenu()}
          <SafeAreaView>
              <ScrollView style={styles.styleList}>
                  {
                      contaneList.split('\n').map((line, index) => {
                          return <Text style={styles.lineText}>{line}</Text>
                      }
                      )
                  }

              </ScrollView>
          </SafeAreaView>

      </View>
  )
}

const styles = StyleSheet.create({
    main:{
        position:"relative"
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
        fontSize:26,
        textShadowColor:'gray',
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 4,
        elevation:8,
        color:'white'
    },
    styleMenu:{
        position:'absolute',
        backgroundColor:'white',
        top:70,
        right:3,
        zIndex:1,
        width:150,
        direction:'rtl',
        paddingRight:10,
        borderRadius:8,
        display:'flex',
        justifyContent:'space-around',
        alignItems:'flex-start',
        elevation:5,
        
    },
    styleList:{
        fontSize:17,
        backgroundColor:'#FFE1E5',
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
import { StyleSheet, Text, View ,TouchableOpacity,Image} from 'react-native';
import MainList from './MainList';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


export default function App() {
  const nav:any = useNavigation()

  
    

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.haeder}>
        <TouchableOpacity onPress={() => { nav.navigate('newList') }}>
          <Image style={styles.bottun} source={require("./imges/add-file.png")} />
        </TouchableOpacity>
        <Text style={styles.title}>loca notes</Text>
        <TouchableOpacity>
          <Image style={styles.bottun} source={require("./imges/menubar.png")} />
        </TouchableOpacity>
      </Appbar.Header>
      <MainList />
    </View>
  );
}

const styles = StyleSheet.create({
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
  bottun:{
    margin:5,
    height:40,
    width:40,
    elevation:8,

  },
  container: {
    flex: 1,
  },
  title:{
    fontWeight:'bold',
    fontSize:35,
    textShadowColor:'gray',
    textShadowOffset: { width: 2, height: 3 }, 
    textShadowRadius: 4,
    elevation:8,
    color:'white'
  }
});
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'

export default function ButtonMenu(props:any) {
  return (
      <TouchableOpacity style={styles.button} onPress={props.func}>
          <View style={{ display: "flex", flexDirection: "row", alignItems: 'center'}}>
              <Text>{props.text}</Text>
          </View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        padding:15,
        width:'100%',
        borderBottomColor:'gray',
        borderBottomWidth:2,
        borderStyle:'solid'
    }

})
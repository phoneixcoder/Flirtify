import { TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native'
import React from 'react'
import Sidebar from '../../assets/Sidebar.png'

const MenuButton = () => {
  return (
    <View style = {styles.container}>
        <TouchableOpacity onPress={() => {console.log("This is Menu.")}}>
          <Image source={Sidebar} resizeMode='contain' style = {styles.image}/>
        </TouchableOpacity>
      <Text style = {styles.heading}>Meet Love</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    heading : {
        fontSize : 24,
        fontWeight : 'bold',
        color : '#FD397F',
        marginLeft: 12, // Adjusted margin
        alignSelf: 'center'
    },
    image: {
        marginTop: 4, 
        width: 50,
        height: 15,
    },
    container : {
        flex : 1,
        flexDirection: 'row',
        backgroundColor : '#fff',
        alignItems : 'center',
        justifyContent : 'center',
        margin: 4,
    }
})

export default MenuButton

import { TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Notification from '../../assets/notification.png';
import Profile from '../../assets/richard.jpg'
const ProfileButton = () => {
  return (
    <View style = {styles.container}>
      <TouchableOpacity onPress={() => { console.log("This is Notification.") }}>
        <Image source={Notification} resizeMode='contain' style = {styles.image}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { console.log("This is Profile.") }}>
        <Image source={Profile} resizeMode='contain' style = {styles.profile}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        flexDirection: 'row',
        backgroundColor : '#fff',
        alignItems : 'center',
        margin: 4,
    },
    image : {
        marginRight : 18,
        width: 25,
        height: 25,
        marginTop : 10
    },
    profile : {
        width : 50,
        height : 50,
        borderRadius : 50,
    }
})

export default ProfileButton
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import ProfileCard from '../components/ProfileCard/ProfileCard';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ProfileCard/>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home


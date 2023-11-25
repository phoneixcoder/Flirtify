import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import React from "react";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const ProfileDetails = ({ route}) => {
  const { name, age, verified, location, img } = route.params.profile;
  return (
    <View style={{ width: "100%" }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Image source={img} resizeMode="contain" style={styles.image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Set a background color to match the status bar color
  },
  image: {
    width: '100%',
    height: 374,
    marginTop: -getStatusBarHeight(), // Apply negative margin to position the image behind the status bar
  },
});

export default ProfileDetails;

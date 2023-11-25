import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import matchPattern from "../assets/matchPattern.png";
import profileImage from "../assets/profileImage.jpeg";
import like from "../assets/like.png";

const Match = ({ route  , navigation}) => {
  const { name, img, gender} = route.params.profile
  return (
    <View style={styles.container}>
      <Image source={matchPattern} style={styles.background} />
      <Text style={styles.heading}>
        It's Match <Text style={{ fontSize: 40 }}>🎉</Text>
      </Text>
      <Text style={styles.subHeading}>You and {name.split(" ")[0]} have liked each other.</Text>
      <View
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          position: "relative",
          justifyContent: "center",
          marginTop: 50,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 100,
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={profileImage}
            style={{ width: 105, height: 105, borderRadius: 100 }}
          />
        </View>
        <View
          style={{
            width: 70,
            height: 70,
            borderRadius: 50,
            backgroundColor: "#FD397F",
            elevation: 10,
            marginTop: -20,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 20,
            position : "absolute",
          }}
        >
          <Image
            source={like}
            resizeMode="contain"
            style={{ width: "40%", height: "40%" }}
          />
        </View>
        <View
          style={{
            width: 120,
            height: 120,
            borderRadius: 100,
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={img}
            style={{ width: 105, height: 105, borderRadius: 100 }}
          />
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={{
            backgroundColor: "#fff",
            width: "80%",
            height: 50,
            borderRadius: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#CB1F5D", fontWeight: 900, fontSize: 22 }}>
            Message Her!
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            marginTop: 14,
          }}
          onPress = {() => {navigation.navigate("Home")}}
        >
          <Text style={{ color: "#fff", fontWeight: 500, fontSize: 16 }}>
            Keep Swiping
          </Text>
        
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CB1F5D",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  heading: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "900",
  },
  subHeading: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "300",
    marginTop: 10,
  },
  background: {
    position: "absolute",
  },
  buttonsContainer: {
    position: "absolute",
    top: "77%",
    display: "flex",
    flexDirection: "column",
    marginTop: 60,
    justifyContent: "space-evenly",
    width: "100%",
    left: 35,
  },
});

export default Match;

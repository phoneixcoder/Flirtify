import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import reject from "../assets/reject.png";
import like from "../assets/like.png";
import superlike from "../assets/super.png";
import verifiedimg from "../assets/verified.png";
import notverified from "../assets/notverified.png";
import locationimg from "../assets/location.png";

const ProfileDetails = ({ route , navigation}) => {
  const { name, age, verified, location, img, about, interest } =
    route.params.profile;
  return (
    <ScrollView>
    <View style={{ width: "100%" }}>
      <View>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <TouchableOpacity 
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          marginTop: 70,
          marginRight: 20,
          backgroundColor : "#fff",
          zIndex : 30,
          width: 40,
          height: 40,
          borderRadius: 100,
          left : "5%"
        }}
        onPress={() => {navigation.goBack()}}
        >
          <Text style={{fontSize : 20}}>←</Text>
        </TouchableOpacity>
        <Image source={img} resizeMode="cover" style={styles.image} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 60,
            justifyContent: "space-evenly",
            width: "100%",
            position: "absolute",
            zIndex: 20,
            top: "74%",
          }}
        >
          <TouchableOpacity
            style={{
              width: 75,
              height: 75,
              borderRadius: 100,
              backgroundColor: "#fff",
              elevation: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={reject}
              resizeMode="contain"
              style={{ width: "50%", height: "50%" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 90,
              height: 90,
              borderRadius: 100,
              backgroundColor: "#FD397F",
              elevation: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={like}
              resizeMode="contain"
              style={{ width: "40%", height: "40%" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 75,
              height: 75,
              borderRadius: 100,
              backgroundColor: "#fff",
              elevation: 10,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={superlike}
              resizeMode="contain"
              style={{ width: "35%", height: "35%" }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 70,
          paddingLeft: 20,
          marginRight: 20,
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: 900 }}>
          {name}, {age}
        </Text>
        {verified ? (
          <Image
            source={verifiedimg}
            resizeMode="contain"
            style={{ width: 30, height: 30, marginLeft: 10 }}
          />
        ) : (
          <Image
            source={notverified}
            resizeMode="contain"
            style={{ width: 30, height: 30, marginLeft: 10 }}
          />
        )}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          paddingLeft: 20,
          marginRight: 20,
        }}
      >
        <Image
          source={locationimg}
          resizeMode="contain"
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Text style={{ fontSize: 20, fontWeight: 500 }}>{location}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 30,
          paddingLeft: 20,
          marginRight: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 900 }}>About</Text>
        <Text style={{ fontSize: 14, fontWeight: 400, marginTop: 10 }}>
          {about}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 30,
          paddingLeft: 20,
          marginRight: 20,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 900 }}>Interest</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap : 20,
            flexWrap: "wrap",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          {interest.map((item, index) => {
            const baseColor = Math.floor(Math.random() * 360); 
            const pastelSaturation = Math.floor(Math.random() * 10) + 70; 
            const pastelLightness = Math.floor(Math.random() * 10) + 70; 
            const dynamicBackgroundColor = `hsl(${baseColor}, ${pastelSaturation}%, ${pastelLightness}%)`;
            return (
              <Text
              style={{
                fontSize: 14,
                fontWeight: 900,
                marginTop: 10,
                color: "#000",
                backgroundColor: dynamicBackgroundColor,
                padding: 10,
                borderRadius: 20
              }}
              key = {index}
            >
              {item}
            </Text>
            );
          })}
        </View>
      </View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: 450,
    borderBottomLeftRadius: 65,
    borderBottomRightRadius: 65,
    marginTop: -getStatusBarHeight(),
  },
});

export default ProfileDetails;

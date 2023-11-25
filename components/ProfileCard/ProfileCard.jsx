import React, { useState } from "react";
import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import TinderCard from "react-tinder-card";
import richardImage from "../../assets/profileImage.jpeg";
import location from "../../assets/location.png";
import verified from "../../assets/verified.png";
import notverified from "../../assets/notverified.png";
import reject from "../../assets/reject.png";
import like from "../../assets/like.png";
import superlike from "../../assets/super.png";

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  cardContainer: {
    width: "100%",
    maxWidth: 319,
    height: "100%",
    maxHeight: 497,
    marginTop: 50,
  },
  card: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    maxWidth: 319,
    height: 497,
    borderRadius: 40,
    overflow: "hidden",
    elevation: 12, // Android shadow
    shadowColor: "#888888", // iOS shadow
    shadowOpacity: 0.2, // iOS shadow
    shadowRadius: 20, // iOS shadow
    shadowOffset: {
      width: 0,
      height: 4,
    }, // iOS shadow
  },
  cardImage: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 40,
  },
  infoText: {
    height: 28,
    justifyContent: "center",
    display: "flex",
    zIndex: -100,
  },
  detailsTile: {
    backgroundColor: "#fff",
    opacity: 0.8,
    borderRadius: 20,
    width: "90%",
    height: 72,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
    position: "absolute",
    top: "82%",
    left: "5.5%",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "900",
    color: "#000",
    textAlign: "left",
    marginRight: 5,
  },
  locationImg: {
    width: 15,
    height: 15,
  },
  location: {
    fontSize: 14,
    fontWeight: "700",
    color: "#000",
    textAlign: "left",
    marginLeft: 5,
  },
  visitProfileButton: {
    backgroundColor: "#FD397F",
    width: 35,
    height: 35,
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const db = [
  {
    name: "Richard Hendricks",
    img: richardImage,
    age: 21,
    verified: true,
    location: "Jaipur, Rajasthan",
  },
  {
    name: "Erlich Bachman",
    img: richardImage,
    age: 21,
    verified: true,
    location: "Jaipur, Rajasthan",
  },
  {
    name: "Monica Hall",
    img: richardImage,
    age: 21,
    verified: true,
    location: "Jaipur, Rajasthan",
  },
  {
    name: "Jared Dunn",
    img: richardImage,
    age: 21,
    verified: true,
    location: "Jaipur, Rajasthan",
  },
  {
    name: "Tilak Atri",
    img: richardImage,
    age: 21,
    verified: true,
    location: "Jaipur, Rajasthan",
  },
];

function ProfileCard() {
  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {characters.map((character) => (
          <TinderCard
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
          >
            <View style={styles.card}>
              <ImageBackground style={styles.cardImage} source={character.img}>
                <View style={styles.detailsTile}>
                  <View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Text style={styles.cardTitle}>
                        {character.name}, {character.age}
                      </Text>
                      {character.verified ? (
                        <Image
                          source={verified}
                          resizeMode="contain"
                          style={styles.locationImg}
                        />
                      ) : (
                        <Image
                          source={notverified}
                          resizeMode="contain"
                          style={styles.locationImg}
                        />
                      )}
                    </View>
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={location}
                        resizeMode="contain"
                        style={styles.locationImg}
                      />
                      <Text style={styles.location}>{character.location}</Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.visitProfileButton}
                    onPress={() => {
                      console.log("Visit Profile");
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontWeight: "bold",
                        fontSize: 22,
                      }}
                    >
                      →
                    </Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </TinderCard>
        ))}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 60,
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={{
            width: 85,
            height: 85,
            borderRadius: 50,
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
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "#FD397F",
            elevation: 10,
            marginTop: -20,
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
            width: 85,
            height: 85,
            borderRadius: 50,
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
  );
}

export default ProfileCard;

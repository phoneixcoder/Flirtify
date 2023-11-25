import React, { useState, useMemo } from "react";
import {
  ImageBackground,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import TinderCard from "react-tinder-card";
import women1 from "../../assets/women1.jpg";
import women2 from "../../assets/women2.jpg";
import women3 from "../../assets/women3.jpg";
import women4 from "../../assets/women4.jpeg";
import women5 from "../../assets/women5.jpeg";
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
    name: "Emily Johnson",
    img: women1,
    age: 22,
    verified: true,
    location: "Jaipur, India",
    swipedYou: null,
    about: "I enjoy exploring new places and trying different cuisines.",
    interest: ["Travel", "Food", "Photography", "Reading"],
  },
  {
    name: "Olivia Rodriguez",
    img: women2,
    age: 23,
    verified: true,
    location: "Delhi, India",
    swipedYou: true,
    about: "Passionate about technology and always up for a good conversation.",
    interest: ["Technology", "Movies", "Fitness", "Gaming"],
  },
  {
    name: "Mia Thompson",
    img: women3,
    age: 21,
    verified: true,
    location: "Mumbai, India",
    swipedYou: false,
    about: "An adventurous spirit who loves outdoor activities and nature.",
    interest: ["Hiking", "Nature", "Painting", "Cooking"],
  },
  {
    name: "Ava Davis",
    img: women4,
    age: 24,
    verified: true,
    location: "Gurugram, India",
    swipedYou: true,
    about: "A fitness enthusiast and a bookworm. Always up for a good workout or a captivating book.",
    interest: ["Fitness", "Reading", "Travel", "Yoga"],
  },
  {
    name: "Sophia Smith",
    img: women5,
    age: 19,
    verified: true,
    location: "London, UK",
    swipedYou: true,
    about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    interest: ["Movie", "Design", "Clubbing", "Music", "Smoking"],
  },
];
const alreadyRemoved = []
let charactersState = db

function ProfileCard({navigation}) {
  const [characters, setCharacters] = useState(db)
  const [lastDirection, setLastDirection] = useState();
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );
  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
    if(direction === "right"){
      let target = db.filter((person) => person.name === nameToDelete)[0];
      if(target.swipedYou === true){
        navigation.navigate('Match', {profile : target})
      }
    }
  }

  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    charactersState = charactersState.filter(character => character.name !== name)
    setCharacters(charactersState)
  }

  const buttonSwipe = (dir) => {
      const cardsLeft = characters.filter(
      (person) => !alreadyRemoved.includes(person.name)
    );
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name;
      const index = db.map((person) => person.name).indexOf(toBeRemoved);
      alreadyRemoved.push(toBeRemoved);
      childRefs[index].current.swipe(dir);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        {characters.map((character, index) => (
          <TinderCard
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name)}
            onCardLeftScreen={() => outOfFrame(character.name)}
            ref={childRefs[index]}
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
                      navigation.navigate('ProfileDetails', { profile: character });
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
          onPress={() => buttonSwipe("left")}
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
          onPress={() => buttonSwipe("right")}
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

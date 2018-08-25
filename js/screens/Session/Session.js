import React from "react";
import {
  Text,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableHighlight
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";

const formatTime = timeString => {
  let H = +timeString.substr(0, 2);
  let h = H % 12 || 12;
  let ampm = H < 12 || H === 24 ? " AM" : " PM";
  timeString = h + timeString.substr(2, 3) + ampm;
  return timeString;
};

const Session = ({ sessions, navigation, faveIds }) => {
  const favesArr = [];
  faveIds.faveIds.map(fave => favesArr.push(fave.id));
  const isFaved = favesArr.includes(sessions.Session.id);
  sessionId = navigation.getParam("itemID");
  return (
    <ScrollView style={styles.scroll}>
      <StatusBar barStyle="light-content" />
      <View style={styles.heart}>
        <Text style={styles.faded}>{sessions.Session.location}</Text>
        {isFaved && <Icon name="md-heart" size={15} color="#cf392a" />}
      </View>
      <Text style={styles.header}>{sessions.Session.title}</Text>
      <Text style={styles.time}>
        {formatTime(sessions.Session.startTime.substr(11, 8))}
      </Text>
      <Text style={styles.desc}>{sessions.Session.description}</Text>
      <Text style={styles.faded}>Presented by:</Text>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("Speaker", {
            speakerId: sessions.Session.speaker.id
          })
        }
      >
        <View style={styles.footerline}>
          <Image
            style={styles.img}
            source={{ uri: sessions.Session.speaker.image }}
          />
          <Text style={styles.speaker}> {sessions.Session.speaker.name}</Text>
        </View>
      </TouchableHighlight>
      <View style={styles.container}>
        {isFaved ? (
          <TouchableHighlight
            style={styles.button}
            onPress={() => faveIds.removeFave(sessions.Session.id)}
          >
            <Text style={styles.buttonText}>Remove Faves</Text>
          </TouchableHighlight>
        ) : (
          <TouchableHighlight
            style={styles.button}
            onPress={() => {
              faveIds.addFave(sessions.Session.id);
            }}
          >
            <Text style={styles.buttonText}>Add to Faves</Text>
          </TouchableHighlight>
        )}
      </View>
    </ScrollView>
  );
};

export default Session;

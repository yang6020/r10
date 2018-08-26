import React, { Fragment } from "react";
import {
  Text,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import LinearGradient from "react-native-linear-gradient";

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
      {sessions.Session.speaker && (
        <Fragment>
          <Text style={styles.faded}>Presented by:</Text>
          <TouchableOpacity
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
              <Text style={styles.speaker}>
                {sessions.Session.speaker.name}
              </Text>
            </View>
          </TouchableOpacity>
        </Fragment>
      )}

      <View style={styles.container}>
        {isFaved ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => faveIds.removeFave(sessions.Session.id)}
          >
            <LinearGradient
              colors={["#9963ea", "#8797D6"]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 1.0 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Remove Faves</Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              faveIds.addFave(sessions.Session.id);
            }}
          >
            <LinearGradient
              colors={["#9963ea", "#8797D6"]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 1.0 }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Add Faves</Text>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default Session;

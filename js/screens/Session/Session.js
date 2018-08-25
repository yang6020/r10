import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  StatusBar,
  Image,
  TouchableHighlight
} from "react-native";

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
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <Text> {sessions.Session.location} </Text>
      <Text> {sessions.Session.title} </Text>
      <Text>{formatTime(sessions.Session.startTime.substr(11, 8))}</Text>
      <Text> {sessions.Session.description} </Text>
      <Text>Presented by:</Text>
      <TouchableHighlight
        onPress={() =>
          navigation.navigate("Speaker", {
            speakerId: sessions.Session.speaker.id
          })
        }
      >
        <View>
          <Image
            style={{ height: 50, width: 50 }}
            source={{ uri: sessions.Session.speaker.image }}
          />
          <Text>{sessions.Session.speaker.name}</Text>
        </View>
      </TouchableHighlight>
      {isFaved ? (
        <TouchableHighlight
          onPress={() => faveIds.removeFave(sessions.Session.id)}
        >
          <Text>Remove Faves</Text>
        </TouchableHighlight>
      ) : (
        <TouchableHighlight
          onPress={() => {
            faveIds.addFave(sessions.Session.id);
            console.log(favesArr);
          }}
        >
          <Text>Add to Faves</Text>
        </TouchableHighlight>
      )}
    </ScrollView>
  );
};

export default Session;

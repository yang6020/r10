import React from "react";
import {
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
const Speaker = ({ speaker, navigation }) => {
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <Icon
        style={{ marginTop: 50 }}
        name="md-close"
        onPress={() => navigation.goBack()}
      />
      <Text>About the Speaker</Text>
      <Image
        style={{ height: 100, width: 100 }}
        source={{ uri: speaker.Speaker.image }}
      />
      <Text> {speaker.Speaker.name}</Text>
      <Text>{speaker.Speaker.bio}</Text>
      <TouchableOpacity onPress={() => Linking.openURL(speaker.Speaker.url)}>
        <Text>Read More on Wikipedia</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Speaker;

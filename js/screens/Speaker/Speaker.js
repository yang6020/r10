import React from "react";
import {
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Linking,
  Image,
  View
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

const Speaker = ({ speaker, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="md-close"
          onPress={() => navigation.goBack()}
          color="#e6e6e6"
          size={23}
        />
        <Text style={styles.about}>About the Speaker</Text>
      </View>
      <ScrollView style={styles.scroll}>
        <StatusBar barStyle="light-content" />
        <View style={styles.body}>
          <Image
            style={styles.speakerIcon}
            source={{ uri: speaker.Speaker.image }}
          />
          <Text style={styles.name}> {speaker.Speaker.name}</Text>
          <Text style={styles.desc}>{speaker.Speaker.bio}</Text>
          <TouchableOpacity
            style={styles.wiki}
            onPress={() => Linking.openURL(speaker.Speaker.url)}
          >
            <Text style={styles.wikiText}>Read More on Wikipedia</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Speaker;

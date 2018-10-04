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
import LinearGradient from "react-native-linear-gradient";
const Speaker = ({ speaker, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          style={{ flex: 0.5, marginLeft: 15 }}
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
            style={styles.buttonMargin}
            onPress={() => Linking.openURL(speaker.Speaker.url)}
          >
            <LinearGradient
              colors={["#9963ea", "#8797D6"]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 1.0, y: 1.0 }}
              style={styles.button}
            >
              <Text style={styles.wikiText}>Read More on Wikipedia</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Speaker;

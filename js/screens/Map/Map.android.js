import React from "react";
import { Text, View, StatusBar } from "react-native";
import styles from "./styles";

const Map = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.comingSoon}>Coming Soon</Text>
    </View>
  );
};

export default Map;

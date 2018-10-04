import React from "react";
import { View, StatusBar, WebView } from "react-native";
import styles from "./styles";

const Map = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <WebView
        source={{
          uri:
            "https://www.google.ca/maps/place/RED+Academy/@49.2633514,-123.1403218,17z/data=!3m1!4b1!4m5!3m4!1s0x548673c79e1ac4fb:0x7edde857c28340ba!8m2!3d49.2633479!4d-123.1381278"
        }}
        style={{ height: "100%", width: "100%" }}
      />
    </View>
  );
};
export default Map;

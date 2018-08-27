import React from "react";
import { Text, View, StatusBar } from "react-native";
import MapIOS from "../../components/MapIOS";

const Map = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <MapIOS />
    </View>
  );
};

export default Map;

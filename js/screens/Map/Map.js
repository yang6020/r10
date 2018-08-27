import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
// import MapView from "react-native-maps";

const Map = ({ mapData }) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      {/* <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      /> */}
      <Text> Map </Text>
    </View>
  );
};

export default Map;

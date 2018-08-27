import React, { Component } from "react";
import { Text, View, StatusBar, Dimensions, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width
  }
});
const region = {
  latitude: 49.2633695,
  longitude: -123.1381744,
  latitudeDelta: 0.00922,
  longitudeDelta: 0.00421
};

const Map = () => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <MapView style={styles.map} region={region}>
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude
          }}
          image={require("../../assets/images/map_pin1.png")}
        />
      </MapView>
    </View>
  );
};

export default Map;

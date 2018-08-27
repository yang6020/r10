import React from "react";
import MapView, { Marker } from "react-native-maps";
import styles from "./styles";

const region = {
  latitude: 49.2633695,
  longitude: -123.1381744,
  latitudeDelta: 0.00922,
  longitudeDelta: 0.00421
};

const MapIOS = () => {
  return (
    <MapView style={styles.map} region={region}>
      <Marker
        coordinate={{
          latitude: region.latitude,
          longitude: region.longitude
        }}
        image={require("../../assets/images/map_pin1.png")}
      />
    </MapView>
  );
};

export default MapIOS;

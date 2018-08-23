import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";

export default class Map extends Component {
  render() {
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <Text> Map </Text>
      </View>
    );
  }
}

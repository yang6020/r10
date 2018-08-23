import React, { Component } from "react";
import { Text, View, StatusBar, ScrollView } from "react-native";

export default class Speaker extends Component {
  render() {
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <Text> Speaker Page </Text>
      </ScrollView>
    );
  }
}

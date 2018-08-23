import React, { Component } from "react";
import { Text, ScrollView, View, StatusBar } from "react-native";

export default class Session extends Component {
  render() {
    sessionId = this.props.navigation.getParam("itemId");
    return (
      <ScrollView>
        <StatusBar barStyle="light-content" />
        <Text> Session </Text>
      </ScrollView>
    );
  }
}

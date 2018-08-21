/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import AboutScreen from "./screens/About";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import RootStackNavigator from "./navigation/RootStackNavigation";
const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjh2hph6n6njl0108f6n59j3j"
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});

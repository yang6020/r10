import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Header } from "react-navigation";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
const GradientHeader = props => (
  <View style={{ backgroundColor: "white", overflow: "hidden" }}>
    <LinearGradient
      colors={["#cf392a", "#9963ea"]}
      start={{ x: 0.0, y: 1.0 }}
      end={{ x: 1.0, y: 0.0 }}
      style={[StyleSheet.absoluteFill, { height: 64, width: "100%" }]}
    />
    <Header {...props} />
  </View>
);

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <GradientHeader {...props} />,
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontFamily: "Montserrat"
  },
  headerStyle: {
    backgroundColor: "transparent"
  },
  headerLeft: Platform.select({
    ios: "",
    android:
      navigation.routeName == "Session" || navigation.routeName == "Speaker" ? (
        ""
      ) : (
        <Icon
          color="white"
          name="md-menu"
          size={30}
          style={{ padding: 15 }}
          onPress={() => navigation.openDrawer()}
        />
      )
  })
});

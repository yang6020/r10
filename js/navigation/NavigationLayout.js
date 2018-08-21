import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import About from "../screens/About";
import Map from "../screens/Map";
import Faves from "../screens/Faves";
import Schedule from "../screens/Schedule";
import Icon from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";
import { StatusBar } from "react-native";

const aboutStack = createStackNavigator(
  {
    About: About
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const mapStack = createStackNavigator(
  {
    Map: {
      screen: Map
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const favesStack = createStackNavigator(
  {
    Faves: {
      screen: Faves
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const scheduleStack = createStackNavigator(
  {
    Schedule: {
      screen: Schedule
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

export default createBottomTabNavigator(
  {
    Schedule: {
      screen: scheduleStack
    },
    Map: {
      screen: mapStack
    },
    Faves: {
      screen: favesStack
    },
    About: {
      screen: aboutStack
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Schedule") {
          iconName = `ios-calendar`;
        } else if (routeName === "Map") {
          iconName = `ios-map`;
        } else if (routeName === "Faves") {
          iconName = `ios-heart`;
        } else if (routeName === "About") {
          iconName = `ios-information-circle`;
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "#999999",
      labelStyle: {
        fontSize: 10,
        fontFamily: "Montserrat"
      },
      style: {
        backgroundColor: "black"
      }
    }
  }
);

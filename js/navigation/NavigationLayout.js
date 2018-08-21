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

const aboutStack = createStackNavigator({
  About: {
    screen: About
  }
});
const mapStack = createStackNavigator({
  Map: {
    screen: Map
  }
});
const favesStack = createStackNavigator({
  Faves: {
    screen: Faves
  }
});
const scheduleStack = createStackNavigator({
  Schedule: {
    screen: Schedule
  }
});

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
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
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

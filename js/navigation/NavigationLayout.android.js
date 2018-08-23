import React from "react";
import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import About from "../screens/About";
import Map from "../screens/Map";
import Faves from "../screens/Faves";
import Schedule from "../screens/Schedule";
import Icon from "react-native-vector-icons/Ionicons";
import Session from "../screens/Session";
import { sharedNavigationOptions } from "./config";

const renderIcon = (iconName, tintColor) => {
  return <Icon name={iconName} size={25} color={tintColor} />;
};

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
    },
    Session: {
      screen: Session
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

aboutStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-information-circle", tintColor)
};

mapStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-map", tintColor)
};

favesStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-heart", tintColor)
};

scheduleStack.navigationOptions = {
  drawerIcon: ({ tintColor }) => renderIcon("md-calendar", tintColor)
};

export default createDrawerNavigator(
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

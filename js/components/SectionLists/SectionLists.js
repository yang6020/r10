import React, { Component, Fragment } from "react";
import {
  Text,
  View,
  SectionList,
  TouchableHighlight,
  Platform
} from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { addFave, getFaves } from "../../config/models";

const iconName = Platform.select({
  ios: "ios-heart",
  android: "md-heart"
});

const formatTime = timeString => {
  let H = +timeString.substr(0, 2);
  let h = H % 12 || 12;
  let ampm = H < 12 || H === 24 ? " AM" : " PM";
  timeString = h + timeString.substr(2, 3) + ampm;
  return timeString;
};

const SectionLists = ({ sessions, navigation, favesIds }) => {
  return (
    <View>
      {console.log(sessions)}
      <SectionList
        renderItem={({ item, index, section }) => (
          <Fragment>
            <View>
              <View style={styles.element}>
                <TouchableHighlight
                  onPress={() => {
                    navigation.navigate("Session", {
                      itemId: item.id
                    });
                  }}
                  activeOpacity={0.6}
                  underlayColor="#999999"
                >
                  <Fragment>
                    <Text style={styles.title}>{item.title}</Text>
                    <View style={styles.locationContainer}>
                      <Text style={styles.location}>{item.location} </Text>
                      <Icon
                        style={styles.heart}
                        name={iconName}
                        size={15}
                        color="red"
                      />
                    </View>
                  </Fragment>
                </TouchableHighlight>
              </View>
            </View>
          </Fragment>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.timeHeader}>
            {formatTime(title.substr(11, 8))}
          </Text>
        )}
        sections={sessions}
        keyExtractor={(item, index) => "" + index}
      />
    </View>
  );
};

export default SectionLists;

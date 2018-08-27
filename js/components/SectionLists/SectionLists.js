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

                      {favesIds.includes(item.id) && (
                        <Icon
                          style={styles.heart}
                          name={iconName}
                          size={15}
                          color="#cf392a"
                        />
                      )}
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

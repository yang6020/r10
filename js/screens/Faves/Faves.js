import React from "react";
import { StatusBar, ScrollView, Text } from "react-native";
import SectionLists from "../../components/SectionLists";
import styles from "./styles";
const Faves = ({ sessions, navigation, faveIds }) => {
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      {sessions.length > 0 ? (
        <SectionLists
          sessions={sessions}
          navigation={navigation}
          favesIds={faveIds}
        />
      ) : (
        <Text style={styles.addSomeFaves}>
          Add some Favorites to see them here!
        </Text>
      )}
    </ScrollView>
  );
};

export default Faves;

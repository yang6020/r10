import React from "react";
import { StatusBar, ScrollView } from "react-native";
import SectionLists from "../../components/SectionLists";
const Faves = ({ sessions, navigation, faveIds }) => {
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <SectionLists
        sessions={sessions}
        navigation={navigation}
        favesIds={faveIds}
      />
    </ScrollView>
  );
};

export default Faves;

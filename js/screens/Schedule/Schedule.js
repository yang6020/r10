import React, { Component } from "react";
import { Text, View, ScrollView, StatusBar } from "react-native";
import SectionLists from "../../components/SectionLists";

const Schedule = ({ sessions, navigation }) => {
  return (
    <ScrollView>
      <StatusBar barStyle="light-content" />
      <SectionLists sessions={sessions} navigation={navigation} />
    </ScrollView>
  );
};

export default Schedule;

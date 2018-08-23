import React, { Component } from "react";
import { Text, View, StatusBar, ScrollView } from "react-native";
import SectionLists from "../../components/SectionLists";
const Faves = data => {
  return (
    <ScrollView>
      {console.log(data)}
      <StatusBar barStyle="light-content" />
      {/* <SectionLists sessions={data.faveIds} /> */}
    </ScrollView>
  );
};

export default Faves;

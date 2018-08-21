import React from "react";
import { Text, View, ScrollView, Image, SectionList } from "react-native";
import styles from "./styles";
import ConductItem from "../../components/ConductItem";

const About = data => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.scroll}>
        <Image
          style={styles.aboutImage}
          source={require(`../../assets/images/r10_logo.png`)}
        />
      </View>
      <Text style={styles.desc}>
        R10 is a conference that focuses on just about any topic related to dev.
      </Text>

      <Text style={styles.header}>Date & Venue</Text>
      <Text style={styles.desc}>
        The R10 conference will take place on Tuesday, June 27, 2017 in
        Vancouver,BC
      </Text>
      <Text style={styles.header}>Code of Conduct</Text>

      {data.conducts.map((conduct, index) => (
        <ConductItem conduct={conduct} key={index} />
      ))}
    </ScrollView>
  );
};

export default About;

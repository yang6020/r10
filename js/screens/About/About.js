import React from "react";
import { Text, View, ScrollView, Image, SectionList } from "react-native";
import styles from "./styles";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import AboutContainer from "./AboutContainer";

class About extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.scroll}>
          <Image
            style={styles.aboutImage}
            source={require(`../../assets/images/r10_logo.png`)}
          />
        </View>
        <Text>Date & Venue</Text>
        <Text>Code of Conduct</Text>

        <Query
          query={gql`
            {
              allConducts {
                title
                description
                id
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <Text>Loading...</Text>;
            if (error) return <Text>Error :</Text>;
            return data.allConducts.map(({ title, description }) => (
              <View>
                <Text style={styles.codeHeader}>{`${title}`}</Text>
                <Text style={styles.codeText}>{` ${description}`}</Text>
              </View>
            ));
          }}
        </Query>
      </ScrollView>
    );
  }
}

export default About;

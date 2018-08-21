import React, { Component } from "react";
import About from "./About";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Text } from "react-native";

const ALL_CONDUCT_QUERY = gql`
  {
    allConducts {
      title
      description
      id
    }
  }
`;
export default class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
      <Query query={ALL_CONDUCT_QUERY}>
        {({ data: { allConducts }, loading, error }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :</Text>;
          return <About conducts={allConducts} />;
        }}
      </Query>
    );
  }
}

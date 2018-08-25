import React, { Component } from "react";
import Speaker from "./Speaker";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text } from "react-native";
import FavesContext from "../../context/FavesContext";
import { valueFromAST } from "graphql";

class SpeakerContainer extends Component {
  static navigationOptions = {
    title: "Speaker"
  };

  render() {
    return (
      <Query
        query={gql`
          query($id: ID) {
            Speaker(id: $id) {
              bio
              id
              image
              name
              url
            }
          }
        `}
        variables={{ id: this.props.navigation.getParam("speakerId") }}
      >
        {({ loading, error, data }) => {
          if (loading) return <Text>Loading...</Text>;
          if (error) return <Text>Error :(</Text>;
          return <Speaker speaker={data} navigation={this.props.navigation} />;
        }}
      </Query>
    );
  }
}

export default SpeakerContainer;

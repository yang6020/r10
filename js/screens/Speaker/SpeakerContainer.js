import React, { Component } from "react";
import Speaker from "./Speaker";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, ActivityIndicator, View } from "react-native";

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
          if (loading)
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" />
              </View>
            );
          if (error) return <Text>Error :(</Text>;
          return <Speaker speaker={data} navigation={this.props.navigation} />;
        }}
      </Query>
    );
  }
}

export default SpeakerContainer;

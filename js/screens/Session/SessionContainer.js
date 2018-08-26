import React, { Component } from "react";
import Session from "./Session";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Text, ActivityIndicator, View } from "react-native";
import FavesContext from "../../context/FavesContext";

export default class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };
  render() {
    return (
      <Query
        query={gql`
          query($id: ID) {
            Session(id: $id) {
              startTime
              location
              title
              id
              description
              speaker {
                image
                name
                id
              }
            }
          }
        `}
        variables={{ id: this.props.navigation.getParam("itemId") }}
      >
        {({ loading, error, data }) => {
          if (loading)
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size="large" />
              </View>
            );
          if (error) return <Text>Error :(</Text>;
          return (
            <FavesContext.Consumer>
              {values => {
                return (
                  <Session
                    sessions={data}
                    navigation={this.props.navigation}
                    faveIds={values}
                  />
                );
              }}
            </FavesContext.Consumer>
          );
        }}
      </Query>
    );
  }
}

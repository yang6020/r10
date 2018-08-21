import React, { Component } from "react";
import About from "./About";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const data = {};
export default class AboutContainer extends Component {
  static navigationOptions = {
    title: "About"
  };
  render() {
    return <About />;
  }
}

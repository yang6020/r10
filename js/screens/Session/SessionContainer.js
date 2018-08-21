import React, { Component } from "react";
import Session from "./Session";
export default class SessionContainer extends Component {
  static navigationOptions = {
    title: "Session"
  };
  render() {
    return <Session />;
  }
}

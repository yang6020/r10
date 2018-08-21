import React, { Component } from "react";
import Speaker from "./Speaker";

export default class SpeakerContainer extends Component {
  static navigationOptions = {
    title: "Speaker"
  };
  render() {
    return <Speaker />;
  }
}

import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
export default class ConductItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ toggled: !this.state.toggled });
          }}
        >
          <Text style={styles.codeHeader}>{`${this.props.conduct.title}`}</Text>
        </TouchableOpacity>
        {this.state.toggled && (
          <Text style={styles.desc}>{` ${
            this.props.conduct.description
          }`}</Text>
        )}
      </View>
    );
  }
}

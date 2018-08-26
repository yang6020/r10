import React, { Component } from "react";
import { Text, View, TouchableOpacity, Animated, Easing } from "react-native";
import styles from "./styles";

export default class ConductItem extends Component {
  duration = 750;
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      opacity: new Animated.Value(0)
    };
  }

  _onPress() {
    const fadeToggle = !this.state.toggle;
    this.animateText(fadeToggle);
    this.setState({ toggled: !this.state.toggled });
  }

  animateText(fadeToggle) {
    this.state.opacity.setValue(fadeToggle ? 0 : 1);
    Animated.timing(this.state.opacity, {
      toValue: fadeToggle ? 1 : 0,
      easing: Easing.elastic(0.2),
      duration: this.duration
    }).start();
  }

  render() {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this._onPress();
          }}
        >
          <Text style={styles.codeHeader}>{` ${
            this.state.toggled ? "-" : "+"
          }  ${this.props.conduct.title}`}</Text>
        </TouchableOpacity>
        {this.state.toggled && (
          <Animated.View
            style={{ opacity: this.state.opacity, paddingBottom: 10 }}
          >
            <Text>{` ${this.props.conduct.description}`}</Text>
          </Animated.View>
        )}
      </View>
    );
  }
}

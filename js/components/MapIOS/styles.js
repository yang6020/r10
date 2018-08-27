import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    height: height,
    width: width
  }
});

export default styles;

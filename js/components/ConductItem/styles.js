import { StyleSheet, Platform } from "react-native";
const montserrat = Platform.select({
  ios: "Montserrat-light",
  android: "Montserrat-Regular"
});

const styles = StyleSheet.create({
  desc: {
    paddingBottom: 20,
    textAlign: "left",
    marginLeft: 15,
    fontFamily: montserrat,
    flexWrap: "wrap"
  },
  codeHeader: {
    fontFamily: montserrat,
    color: "#9963ea",
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 15,
    flexWrap: "wrap"
  }
});

export default styles;

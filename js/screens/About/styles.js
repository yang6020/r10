import { StyleSheet, Platform } from "react-native";
const montserratLight = Platform.select({
  ios: "Montserrat-light",
  android: "Montserrat-Light"
});

const montserrat = Platform.select({
  ios: "Montserrat",
  android: "Montserrat-Regular"
});
const styles = StyleSheet.create({
  scroll: {
    marginTop: 20,
    borderBottomWidth: 0.5,
    borderColor: "#d6d6d6",
    paddingBottom: 20,
    alignItems: "center",
    marginBottom: 20
  },
  container: {
    backgroundColor: "white",
    padding: 10
  },
  desc: {
    paddingBottom: 20,
    textAlign: "left",
    marginLeft: 5,
    fontFamily: montserratLight,
    color: "black"
  },
  header: {
    paddingBottom: 20,
    textAlign: "left",
    marginLeft: 5,
    fontSize: 20,
    fontFamily: montserrat,
    color: "black"
  },
  footer: {
    textAlign: "left",
    paddingBottom: 10,
    fontFamily: montserratLight,
    marginLeft: 5,
    fontSize: 15
  },
  footerline: {
    borderTopWidth: 0.5,
    borderColor: "#d6d6d6",
    paddingTop: 15,
    paddingBottom: 13
  }
});

export default styles;

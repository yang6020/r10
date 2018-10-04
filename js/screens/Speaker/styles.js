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
    borderBottomWidth: 0.5,
    backgroundColor: "white",
    height: "100%",
    borderRadius: 5
  },
  container: {
    backgroundColor: "black",
    paddingRight: 15,
    paddingLeft: 15,
    height: "100%"
  },
  about: {
    fontFamily: montserrat,
    color: "white",
    alignSelf: "flex-start",
    fontSize: 18
  },
  header: {
    flexDirection: "row",
    paddingVertical: 40,
    color: "white"
  },
  speakerIcon: {
    marginTop: 20,
    height: 98,
    width: 98,
    borderRadius: 49
  },
  body: {
    alignItems: "center"
  },
  desc: {
    textAlign: "left",
    marginLeft: 15,
    marginRight: 15,
    lineHeight: 22,
    fontFamily: montserratLight,
    fontSize: 14
  },
  name: {
    marginTop: 15,
    paddingBottom: 20,
    textAlign: "center",
    fontSize: 23,
    fontFamily: montserrat,
    color: "black"
  },
  button: {
    marginTop: 5,
    padding: 10,
    borderRadius: 25,
    width: "80%",
    alignItems: "center"
  },
  wikiText: {
    textAlign: "center",
    color: "white",
    fontFamily: montserrat,
    fontSize: 14.5,
    lineHeight: 15 * 1.5
  },
  buttonMargin: {
    marginTop: 20
  }
});

export default styles;

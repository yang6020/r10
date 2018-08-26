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
    backgroundColor: "white",
    height: "100%",
    borderRadius: 5
  },
  container: {
    backgroundColor: "black",
    paddingTop: 15,
    paddingRight: 15,
    paddingLeft: 15,
    height: "100%"
  },
  about: {
    fontFamily: montserrat,
    color: "white",
    marginLeft: "22%",
    fontWeight: "bold",
    marginTop: 2
  },
  header: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginTop: 35,
    paddingBottom: 5
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
  wiki: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "purple",
    borderRadius: 100,
    width: "80%",
    marginBottom: 20
  },
  wikiText: {
    textAlign: "center",
    color: "white",
    fontFamily: montserrat,
    fontSize: 14.5,
    lineHeight: 15 * 1.5
  }
});

export default styles;

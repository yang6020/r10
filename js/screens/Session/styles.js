import { StyleSheet, Platform } from "react-native";
const montserratLight = Platform.select({
  ios: "Montserrat-light",
  android: "Montserrat-Regular"
});

const montserrat = Platform.select({
  ios: "Montserrat",
  android: "Montserrat-Regular"
});
const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
    padding: 20
  },
  desc: {
    paddingBottom: 20,
    textAlign: "left",
    marginLeft: 5,
    fontFamily: montserratLight,
    color: "black",
    fontSize: 16,
    lineHeight: 1.5 * 16
  },
  header: {
    marginTop: 10,
    paddingBottom: 10,
    textAlign: "left",
    fontSize: 25,
    fontFamily: montserrat,
    color: "black"
  },
  faded: {
    fontFamily: montserrat,
    color: "#999999"
  },
  footerline: {
    borderBottomWidth: 1,
    borderColor: "#f6f6f6",
    paddingTop: 15,
    paddingBottom: 16,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center"
  },
  speaker: {
    textAlign: "center",
    fontFamily: montserrat,
    marginLeft: 5
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "purple",
    borderRadius: 100,
    width: "65%"
  },
  time: {
    paddingBottom: 15,
    color: "#cf392a",
    fontFamily: montserrat
  },
  img: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontFamily: montserrat,
    fontSize: 14.5,
    lineHeight: 15 * 1.5
  },
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  heart: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});

export default styles;

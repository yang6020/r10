import { StyleSheet, Platform } from "react-native";
const montserrat = Platform.select({
  ios: "Montserrat",
  android: "Montserrat-Regular"
});
const styles = StyleSheet.create({
  element: {
    backgroundColor: "white",
    borderBottomWidth: 0.25,
    borderColor: "#e6e6e6"
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  button: {
    position: "absolute"
  },
  title: {
    fontFamily: montserrat,
    justifyContent: "center",
    textAlign: "left",
    marginLeft: 15,
    marginTop: 5,
    paddingBottom: 5,
    paddingTop: 5,
    color: "black"
  },
  location: {
    fontFamily: montserrat,
    fontSize: 12,
    justifyContent: "center",
    marginLeft: 15,
    paddingBottom: 12,
    color: "#909090"
  },
  timeHeader: {
    marginLeft: 15,
    fontFamily: montserrat,
    fontSize: 11,
    paddingTop: 4,
    paddingBottom: 4,
    color: "black"
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  heart: {
    marginRight: 10
  }
});

export default styles;

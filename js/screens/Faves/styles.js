import { StyleSheet, Platform } from "react-native";
const montserrat = Platform.select({
  ios: "Montserrat",
  android: "Montserrat-Right"
});

const styles = StyleSheet.create({
  addSomeFaves: {
    alignItems: "center",
    textAlign: "center",
    color: "#535353",
    fontFamily: montserrat,
    fontSize: 20,
    justifyContent: "center",
    fontWeight: "bold",
    marginTop: "20%"
  }
});

export default styles;

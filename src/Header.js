// Functional component
import React from "react"
import { Text, View, StyleSheet, StatusBar } from "react-native"
import { Colors } from "../assets/Colors"

const Header = () => (
  <View style={Styles.container}>
    <StatusBar backgroundColor={Colors.red} />
    <Text style={Styles.txtTitle}>Deals of The Week</Text>
  </View>
)

const Styles = StyleSheet.create({
  txtTitle: {
    color: "white",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center"
  },
  container: { backgroundColor: Colors.red, height: 40 }
})

export default Header

// Functional component
import React from "react"
import { Text, View, StyleSheet, StatusBar } from "react-native"

const redBackgroundColor = "#ff6363"
const Header = () => (
  <View style={Styles.container}>
    <StatusBar backgroundColor={redBackgroundColor} />
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
  container: { backgroundColor: redBackgroundColor, height: 40 }
})

export default Header

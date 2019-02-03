import React from "react"
import { Image, StyleSheet, View } from "react-native"

const BottomNavigation = () => (
  <View style={Styles.container}>
    <View style={Styles.itemContainer}>
      <Image
        style={{ alignContent: "center", justifyContent: "center" }}
        source={require("../assets/home.png")}
      />
    </View>
    <View style={Styles.itemContainer}>
      <Image source={require("../assets/search.png")} />
    </View>
    <View style={Styles.itemContainer}>
      <Image source={require("../assets/notification.png")} />
    </View>
    <View style={Styles.itemContainer}>
      <Image source={require("../assets/shopping-bag.png")} />
    </View>
    <View style={Styles.itemContainer}>
      <Image source={require("../assets/avatar.png")} />
    </View>
  </View>
)

const Styles = StyleSheet.create({
  itemContainer: { marginTop: 15 },
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    justifyContent: "space-evenly",
    flexDirection: "row"
  }
})

export default BottomNavigation

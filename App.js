import React, { Component } from "react"
import { View } from "react-native"
import Header from "./src/Header"
import ProductCard from "./src/ProductCard"
import BottomNavigation from "./src/BottomNavigation"

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header style={{ flex: 1 }} />
        <ProductCard style={{ flex: 1 }} />
        <BottomNavigation style={{ flex: 1 }} />
      </View>
    )
  }
}

// Todo-List
// Toolbar header with Title
// Product List:
// Image
// Text - Product name
// Text - Price
// Button - Quantity
// Bottom navigation
